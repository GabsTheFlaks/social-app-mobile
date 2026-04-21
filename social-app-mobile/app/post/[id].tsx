import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { useLocalSearchParams, Stack } from 'expo-router';
import { Image } from 'expo-image';
import { Heart, MessageCircle, Share2, MoreHorizontal } from 'lucide-react-native';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';

export default function PostScreen() {
  const { id } = useLocalSearchParams();

  return (
    <View className="flex-1 bg-white">
      <Stack.Screen options={{ title: `Publicação ${id ? `#${id}` : ''}`, headerBackTitle: 'Voltar' }} />

      <ScrollView className="flex-1" contentContainerStyle={{ paddingBottom: 100 }}>
        <View className="p-4 border-b border-gray-100">
          {/* Header do Post */}
          <View className="flex-row items-center justify-between mb-4">
            <View className="flex-row items-center">
              <Image
                source={{ uri: 'https://i.pravatar.cc/150?u=1' }}
                className="w-12 h-12 rounded-full bg-gray-200"
              />
              <View className="ml-3">
                <Text className="font-bold text-gray-900 text-base">João Silva</Text>
                <Text className="text-gray-500 text-sm">2h atrás</Text>
              </View>
            </View>
            <TouchableOpacity>
              <MoreHorizontal color="#9ca3af" />
            </TouchableOpacity>
          </View>

          {/* Conteúdo */}
          <Text className="text-gray-900 text-lg mb-4 leading-7">
            Acabei de configurar o Expo Router! Muito mais fácil que React Navigation puro. A visualização das rotas filhas em tela cheia usando a Stack Screen está incrível! 🚀🚀
          </Text>

          <Image
            source={{ uri: 'https://picsum.photos/600/400' }}
            className="w-full h-64 rounded-xl mb-4 bg-gray-100"
            contentFit="cover"
          />

          {/* Status Bar (Likes/Comments info) */}
          <View className="flex-row items-center justify-between py-3 border-y border-gray-100">
            <Text className="text-gray-500 text-sm">12 curtidas</Text>
            <Text className="text-gray-500 text-sm">3 comentários</Text>
          </View>

          {/* Ações */}
          <View className="flex-row items-center justify-around py-2">
            <TouchableOpacity className="flex-row items-center p-2">
              <Heart size={22} color="#6b7280" />
              <Text className="text-gray-600 font-medium ml-2">Curtir</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-row items-center p-2">
              <MessageCircle size={22} color="#6b7280" />
              <Text className="text-gray-600 font-medium ml-2">Comentar</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-row items-center p-2">
              <Share2 size={22} color="#6b7280" />
              <Text className="text-gray-600 font-medium ml-2">Compartilhar</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Secção de Comentários */}
        <View className="p-4 bg-gray-50 flex-1">
          <Text className="font-semibold text-gray-800 mb-4">Comentários</Text>

          <View className="flex-row mb-4">
            <Image source={{ uri: 'https://i.pravatar.cc/150?u=2' }} className="w-10 h-10 rounded-full bg-gray-200" />
            <View className="ml-3 bg-white p-3 rounded-2xl rounded-tl-none flex-1 border border-gray-100 shadow-sm">
              <Text className="font-bold text-gray-900 mb-1">Maria Souza</Text>
              <Text className="text-gray-700">Com certeza! Eu demorei um tempão pra configurar no meu app antigo.</Text>
            </View>
          </View>

        </View>
      </ScrollView>

      {/* Input Flutuante para Comentar */}
      <View className="absolute bottom-0 w-full bg-white border-t border-gray-200 p-3 flex-row items-center">
        <Image source={{ uri: 'https://i.pravatar.cc/150?u=12' }} className="w-8 h-8 rounded-full bg-gray-200 mr-2" />
        <View className="flex-1">
          <Input
             placeholder="Adicione um comentário..."
             className="mb-0 bg-gray-100 border-0 rounded-full h-10 py-0"
          />
        </View>
        <Button label="Postar" variant="outline" className="ml-2 h-10 py-0 px-3 border-0" />
      </View>
    </View>
  );
}