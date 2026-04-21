import { View, Text, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';

export default function LoginScreen() {
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
        />

        <Input
          label="Senha"
          placeholder="Sua senha secreta"
          secureTextEntry
        />

        <Button
          label="Entrar"
          className="mt-4"
          onPress={() => router.replace('/(tabs)/feed')}
        />

        <TouchableOpacity className="mt-6 items-center">
          <Text className="text-blue-600 font-medium text-base">Não tem uma conta? Cadastre-se</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}