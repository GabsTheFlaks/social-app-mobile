import "../global.css";
import { useEffect } from 'react';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/use-color-scheme';
import { registerForPushNotificationsAsync } from '@/utils/notifications';

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
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
      <StatusBar style="dark" />
    </ThemeProvider>
  );
}