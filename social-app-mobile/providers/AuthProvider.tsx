import React, { createContext, useState, useEffect, useContext } from 'react';
import { Session, User } from '@supabase/supabase-js';
import { supabase } from '@/lib/supabase';
import { router, useSegments } from 'expo-router';

type AuthContextType = {
  session: Session | null;
  user: User | null;
  initialized: boolean;
};

const AuthContext = createContext<AuthContextType>({
  session: null,
  user: null,
  initialized: false,
});

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [initialized, setInitialized] = useState<boolean>(false);
  const segments = useSegments();

  useEffect(() => {
    // Busca a sessão atual que está guardada no AsyncStorage
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user || null);
      setInitialized(true);
    });

    // Escuta por mudanças na autenticação (login, logout)
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      setUser(session?.user || null);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  // Proteção de Rotas: Redireciona o usuário dependendo se está logado ou não
  useEffect(() => {
    if (!initialized) return;

    const inAuthGroup = segments[0] === '(tabs)' || segments[0] === 'chat' || segments[0] === 'post';

    if (!session && inAuthGroup) {
      // Se não tem sessão e tentou acessar tela restrita, manda pro Login
      router.replace('/');
    } else if (session && segments[0] === undefined) {
      // Se tem sessão e está na tela raiz (index/login), manda pro Feed
      router.replace('/(tabs)/feed');
    }
  }, [session, initialized, segments]);

  return (
    <AuthContext.Provider value={{ session, user, initialized }}>
      {children}
    </AuthContext.Provider>
  );
}
