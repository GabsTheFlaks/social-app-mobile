import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';

// NOTA: Em produção, utilize variáveis de ambiente, por exemplo:
// const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL || '';
// const supabaseAnonKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY || '';

const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL || 'https://yoursupabaseurl.supabase.co';
const supabaseAnonKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY || 'YOUR_SUPABASE_ANON_KEY';

import { Platform } from 'react-native';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: Platform.OS === 'web' ? undefined : AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});