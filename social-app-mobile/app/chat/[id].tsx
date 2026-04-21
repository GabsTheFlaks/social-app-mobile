import { View, Text, KeyboardAvoidingView, Platform, FlatList, TouchableOpacity } from 'react-native';
import { useLocalSearchParams, Stack } from 'expo-router';
import { Send } from 'lucide-react-native';
import { Input } from '@/components/ui/Input';

const MOCK_MESSAGES = [
  { id: '1', text: 'Oi! Tudo bem?', isMe: false, time: '10:00' },
  { id: '2', text: 'Tudo ótimo, e com você?', isMe: true, time: '10:05' },
  { id: '3', text: 'Queria saber se você vai no evento amanhã.', isMe: false, time: '10:06' },
];

export default function ChatScreen() {
  const { id } = useLocalSearchParams();

  const renderMessage = ({ item }: { item: typeof MOCK_MESSAGES[0] }) => (
    <View className={`max-w-[80%] rounded-2xl p-3 mb-3 ${item.isMe ? 'bg-blue-600 self-end rounded-tr-sm' : 'bg-white border border-gray-200 self-start rounded-tl-sm'}`}>
      <Text className={`text-base ${item.isMe ? 'text-white' : 'text-gray-900'}`}>{item.text}</Text>
      <Text className={`text-[10px] mt-1 self-end ${item.isMe ? 'text-blue-200' : 'text-gray-400'}`}>{item.time}</Text>
    </View>
  );

  return (
    <KeyboardAvoidingView
      className="flex-1 bg-gray-50"
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 0}
    >
      <Stack.Screen options={{ title: `Chat: ${id}`, headerBackTitle: 'Voltar' }} />

      <FlatList
        data={MOCK_MESSAGES}
        keyExtractor={item => item.id}
        renderItem={renderMessage}
        contentContainerStyle={{ padding: 16 }}
        className="flex-1"
      />

      <View className="flex-row items-center p-3 bg-white border-t border-gray-200">
        <View className="flex-1">
          <Input
            placeholder="Digite uma mensagem..."
            className="mb-0 bg-gray-100 border-0 rounded-full h-12"
          />
        </View>
        <TouchableOpacity className="bg-blue-600 w-12 h-12 rounded-full items-center justify-center ml-2">
          <Send color="white" size={20} />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}