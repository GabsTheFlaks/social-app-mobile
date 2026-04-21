import "../global.css";
import { useEffect } from 'react';
import { DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { registerForPushNotificationsAsync } from '@/utils/notifications';
import { AuthProvider } from '@/providers/AuthProvider';

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  // Vamos forçar temporariamente o light mode para garantir a legibilidade do app até que as classes `dark:` sejam adicionadas ao Tailwind.
  // const colorScheme = useColorScheme();

  useEffect(() => {
    // Registra o dispositivo para receber push notifications assim que o app inicia
    registerForPushNotificationsAsync();
  }, []);

  return (
    <ThemeProvider value={DefaultTheme}>
      <AuthProvider>
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
      </AuthProvider>
      <StatusBar style="dark" />
    </ThemeProvider>
  );
}