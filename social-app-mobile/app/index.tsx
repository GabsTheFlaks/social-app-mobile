import { View, Text, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';

export default function LoginScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-white p-4">
      <Text className="text-3xl font-bold mb-8 text-blue-600">Social App</Text>

      <View className="w-full max-w-sm space-y-4">
        <Text className="text-center text-gray-500 mb-4">Bem-vindo de volta!</Text>

        {/* Placeholders for Inputs */}
        <View className="bg-gray-100 p-4 rounded-lg mb-2">
          <Text className="text-gray-400">Email</Text>
        </View>
        <View className="bg-gray-100 p-4 rounded-lg mb-6">
          <Text className="text-gray-400">Senha</Text>
        </View>

        <TouchableOpacity
          className="bg-blue-600 p-4 rounded-lg items-center"
          onPress={() => router.replace('/(tabs)/feed')}
        >
          <Text className="text-white font-semibold text-lg">Entrar (Testar Feed)</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}