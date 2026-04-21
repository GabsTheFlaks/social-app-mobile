import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { Image } from 'expo-image';
import { Heart, MessageCircle, UserPlus } from 'lucide-react-native';

const MOCK_NOTIFICATIONS = [
  { id: '1', type: 'like', user: 'Maria Souza', avatar: 'https://i.pravatar.cc/150?u=2', time: '10 min atrás', read: false },
  { id: '2', type: 'comment', user: 'Carlos Dias', avatar: 'https://i.pravatar.cc/150?u=4', time: '2 horas atrás', read: true },
  { id: '3', type: 'follow', user: 'Ana Costa', avatar: 'https://i.pravatar.cc/150?u=3', time: '1 dia atrás', read: true },
];

export default function NotificationsScreen() {
  const getIcon = (type: string) => {
    switch (type) {
      case 'like': return <Heart fill="#ef4444" color="#ef4444" size={20} />;
      case 'comment': return <MessageCircle fill="#3b82f6" color="#3b82f6" size={20} />;
      case 'follow': return <UserPlus color="#10b981" size={20} />;
      default: return null;
    }
  };

  const getText = (item: typeof MOCK_NOTIFICATIONS[0]) => {
    switch (item.type) {
      case 'like': return <Text><Text className="font-bold">{item.user}</Text> curtiu sua publicação.</Text>;
      case 'comment': return <Text><Text className="font-bold">{item.user}</Text> comentou no seu post.</Text>;
      case 'follow': return <Text><Text className="font-bold">{item.user}</Text> começou a seguir você.</Text>;
      default: return '';
    }
  };

  const renderItem = ({ item }: { item: typeof MOCK_NOTIFICATIONS[0] }) => (
    <TouchableOpacity
      className={`flex-row p-4 border-b border-gray-100 ${item.read ? 'bg-white' : 'bg-blue-50/50'}`}
    >
      <View className="relative">
        <Image
          source={{ uri: item.avatar }}
          className="w-12 h-12 rounded-full bg-gray-200"
          contentFit="cover"
        />
        <View className="absolute -bottom-1 -right-1 bg-white rounded-full p-1 shadow-sm">
          {getIcon(item.type)}
        </View>
      </View>
      <View className="ml-4 flex-1 justify-center">
        <Text className="text-gray-900 text-base">{getText(item)}</Text>
        <Text className="text-gray-500 text-xs mt-1">{item.time}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View className="flex-1 bg-gray-50">
      <FlatList
        data={MOCK_NOTIFICATIONS}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
}