import { useState } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { supabase } from '@/lib/supabase';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);

  async function handleAuth() {
    if (!email || !password) {
      Alert.alert('Erro', 'Por favor, preencha email e senha.');
      return;
    }

    setLoading(true);

    try {
      if (isSignUp) {
        const { error } = await supabase.auth.signUp({
          email,
          password,
        });

        if (error) throw error;
        Alert.alert('Sucesso', 'Verifique seu email para confirmar o cadastro!');
      } else {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });

        if (error) throw error;
        // O AuthProvider vai detectar a sessão e redirecionar para o feed automaticamente
      }
    } catch (error: any) {
      Alert.alert('Erro', error.message || 'Ocorreu um erro durante a autenticação.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <View className="flex-1 justify-center bg-white p-6">
      <View className="items-center mb-10">
        <Text className="text-4xl font-bold text-blue-600 mb-2">Social App</Text>
        <Text className="text-center text-gray-500 text-base">Conecte-se com sua rede.</Text>
      </View>

      <View className="w-full">
        <Input
          label="Email"
          placeholder="seu@email.com"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />

        <Input
          label="Senha"
          placeholder="Sua senha secreta"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <Button
          label={loading ? 'Carregando...' : (isSignUp ? 'Cadastrar' : 'Entrar')}
          className="mt-4"
          onPress={handleAuth}
          disabled={loading}
        />

        <TouchableOpacity
          className="mt-6 items-center"
          onPress={() => setIsSignUp(!isSignUp)}
        >
          <Text className="text-blue-600 font-medium text-base">
            {isSignUp ? 'Já tem uma conta? Entre' : 'Não tem uma conta? Cadastre-se'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}