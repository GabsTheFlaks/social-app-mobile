import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useCallback } from 'react';
import { Image } from 'expo-image';
import { Heart, MessageCircle, Share2 } from 'lucide-react-native';
import { router } from 'expo-router';

// Dados falsos para simular o feed enquanto não conectamos o banco
const MOCK_POSTS = [
  {
    id: '1',
    user: { name: 'João Silva', avatar: 'https://i.pravatar.cc/150?u=1' },
    content: 'Acabei de configurar o Expo Router! Muito mais fácil que React Navigation puro. 🚀',
    image: null,
    likes: 12,
    comments: 3,
    time: '2h atrás'
  },
  {
    id: '2',
    user: { name: 'Maria Souza', avatar: 'https://i.pravatar.cc/150?u=2' },
    content: 'Olha essa vista que incrível! 😍',
    image: 'https://picsum.photos/400/300',
    likes: 45,
    comments: 10,
    time: '5h atrás'
  }
];

export default function FeedScreen() {
  const renderItem = useCallback(({ item }: { item: typeof MOCK_POSTS[0] }) => (
    <TouchableOpacity
      className="bg-white p-4 mb-2 border-b border-gray-100"
      onPress={() => router.push(`/post/${item.id}`)}
      activeOpacity={0.8}
    >
      {/* Header do Post */}
      <View className="flex-row items-center mb-3">
        <Image
          source={{ uri: item.user.avatar }}
          className="w-10 h-10 rounded-full bg-gray-200"
        />
        <View className="ml-3">
          <Text className="font-bold text-gray-900">{item.user.name}</Text>
          <Text className="text-gray-500 text-xs">{item.time}</Text>
        </View>
      </View>

      {/* Conteúdo */}
      <Text className="text-gray-800 text-base mb-3 leading-6">{item.content}</Text>

      {item.image && (
        <Image
          source={{ uri: item.image }}
          className="w-full h-48 rounded-lg mb-3 bg-gray-100"
          contentFit="cover"
          transition={200}
        />
      )}

      {/* Ações (Curtir, Comentar) */}
      <View className="flex-row items-center space-x-6 pt-2 border-t border-gray-50 mt-1">
        <TouchableOpacity className="flex-row items-center space-x-1">
          <Heart size={20} color="#6b7280" />
          <Text className="text-gray-500 ml-1">{item.likes}</Text>
        </TouchableOpacity>

        <TouchableOpacity className="flex-row items-center space-x-1">
          <MessageCircle size={20} color="#6b7280" />
          <Text className="text-gray-500 ml-1">{item.comments}</Text>
        </TouchableOpacity>

        <TouchableOpacity className="flex-row items-center space-x-1 ml-auto">
          <Share2 size={20} color="#6b7280" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  ), []);

  return (
    <FlatList
      data={MOCK_POSTS}
      keyExtractor={item => item.id}
      renderItem={renderItem}
      className="flex-1 bg-gray-50"
      contentContainerStyle={{ paddingBottom: 20 }}
    />
  );
}