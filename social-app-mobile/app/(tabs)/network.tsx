import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useCallback } from 'react';
import { Image } from 'expo-image';
import { Search, UserPlus } from 'lucide-react-native';
import { Input } from '@/components/ui/Input';

const SUGGESTED_USERS = [
  { id: '1', name: 'Ana Costa', username: '@anac', avatar: 'https://i.pravatar.cc/150?u=3' },
  { id: '2', name: 'Carlos Dias', username: '@carlosd', avatar: 'https://i.pravatar.cc/150?u=4' },
  { id: '3', name: 'Beatriz Lima', username: '@bealima', avatar: 'https://i.pravatar.cc/150?u=5' },
];

export default function NetworkScreen() {
  const renderItem = useCallback(({ item }: { item: typeof SUGGESTED_USERS[0] }) => (
    <View className="flex-row items-center justify-between bg-white p-4 mb-2 border-b border-gray-100">
      <View className="flex-row items-center flex-1">
        <Image
          source={{ uri: item.avatar }}
          className="w-12 h-12 rounded-full bg-gray-200"
          contentFit="cover"
        />
        <View className="ml-3 flex-1">
          <Text className="font-bold text-gray-900 text-base">{item.name}</Text>
          <Text className="text-gray-500 text-sm">{item.username}</Text>
        </View>
      </View>
      <TouchableOpacity className="bg-blue-50 px-4 py-2 rounded-full flex-row items-center border border-blue-200">
        <UserPlus size={16} color="#2563eb" />
        <Text className="text-blue-600 font-medium ml-2 text-sm">Seguir</Text>
      </TouchableOpacity>
    </View>
  ), []);

  return (
    <View className="flex-1 bg-gray-50">
      <View className="bg-white p-4 pt-6 pb-2 shadow-sm z-10">
        <View className="flex-row items-center bg-gray-100 rounded-lg px-3 py-2">
          <Search size={20} color="#6b7280" />
          <Input
            className="flex-1 ml-2 bg-transparent border-0 p-0 mb-0 h-8"
            placeholder="Buscar pessoas..."
            placeholderTextColor="#9ca3af"
          />
        </View>
      </View>

      <Text className="font-semibold text-gray-800 text-lg px-4 py-4">Sugestões para você</Text>

      <FlatList
        data={SUGGESTED_USERS}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
}