import { useState } from 'react';
import { View, Text, Alert } from 'react-native';
import { Image } from 'expo-image';
import * as ImagePicker from 'expo-image-picker';
import { Button } from '@/components/ui/Button';
import { useAuth } from '@/providers/AuthProvider';
import { supabase } from '@/lib/supabase';

export default function ProfileScreen() {
  const { user } = useAuth();
  const [imageUri, setImageUri] = useState<string | null>('https://i.pravatar.cc/150?u=12');

  const handleSignOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      // AuthProvider irá detectar e redirecionar para '/'
    } catch (error: any) {
      Alert.alert('Erro', error.message || 'Erro ao sair da conta');
    }
  };

  const pickImage = async () => {
    // Pedir permissão
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      Alert.alert("Permissão Necessária", "Você precisa permitir o acesso à galeria de fotos para mudar o avatar.");
      return;
    }

    // Abrir o picker
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.8,
    });

    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
      // TODO: Aqui a URI seria enviada para o Supabase Storage
      console.log('Imagem selecionada:', result.assets[0].uri);
    }
  };

  return (
    <View className="flex-1 items-center bg-gray-50 p-6">
      <View className="items-center mt-8 mb-6 w-full">
        <View className="relative">
          <Image
            source={{ uri: imageUri || 'https://via.placeholder.com/150' }}
            className="w-28 h-28 rounded-full border-4 border-white shadow-sm"
            contentFit="cover"
          />
        </View>

        <Text className="text-2xl font-bold text-gray-900 mt-4">
          {user?.user_metadata?.full_name || 'Meu Usuário'}
        </Text>
        <Text className="text-gray-500 text-base">
          {user?.email || '@meuusuario'}
        </Text>

        <View className="flex-row mt-4 space-x-6">
          <View className="items-center">
            <Text className="font-bold text-xl text-gray-900">42</Text>
            <Text className="text-gray-500 text-sm">Posts</Text>
          </View>
          <View className="items-center">
            <Text className="font-bold text-xl text-gray-900">12k</Text>
            <Text className="text-gray-500 text-sm">Seguidores</Text>
          </View>
          <View className="items-center">
            <Text className="font-bold text-xl text-gray-900">350</Text>
            <Text className="text-gray-500 text-sm">Seguindo</Text>
          </View>
        </View>
      </View>

      <View className="flex-row space-x-2 mb-8 w-full justify-center px-4">
        <Button
          label="Alterar Foto"
          variant="outline"
          onPress={pickImage}
          className="flex-1"
        />
        <Button
          label="Editar"
          variant="secondary"
          className="flex-1"
        />
      </View>

      {/* Aqui entraria a FlatList com os próprios posts, mas para simplificar vamos apenas alinhar o logout embaixo */}
      <View className="w-full flex-1 justify-end pb-4">
        <Button
          label="Sair da Conta"
          variant="danger"
          className="w-full"
          onPress={handleSignOut}
        />
      </View>
    </View>
  );
}