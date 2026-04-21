import { useState } from 'react';
import { View, Text, Alert } from 'react-native';
import { Image } from 'expo-image';
import * as ImagePicker from 'expo-image-picker';
import { Button } from '@/components/ui/Button';

export default function ProfileScreen() {
  const [imageUri, setImageUri] = useState<string | null>('https://i.pravatar.cc/150?u=12');

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
      <View className="items-center mt-10 mb-8 w-full">
        <View className="relative">
          <Image
            source={{ uri: imageUri || 'https://via.placeholder.com/150' }}
            className="w-32 h-32 rounded-full border-4 border-white shadow-sm"
          />
        </View>

        <Text className="text-2xl font-bold text-gray-900 mt-4">Meu Usuário</Text>
        <Text className="text-gray-500 text-base">@meuusuario</Text>
      </View>

      <Button
        label="Alterar Foto de Perfil"
        variant="outline"
        onPress={pickImage}
        className="w-full mb-4"
      />

      <Button
        label="Editar Informações"
        variant="secondary"
        className="w-full mb-8"
      />

      <Button
        label="Sair da Conta"
        variant="danger"
        className="w-full mt-auto"
      />
    </View>
  );
}