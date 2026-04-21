import React from 'react';
import { TextInput, TextInputProps, View, Text } from 'react-native';

interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
}

export function Input({ label, error, className, ...props }: InputProps) {
  return (
    <View className="mb-4">
      {label && <Text className="text-gray-700 text-sm mb-1 font-medium">{label}</Text>}
      <TextInput
        className={`bg-white border ${error ? 'border-red-500' : 'border-gray-300'} rounded-lg px-4 py-3 text-base text-gray-900 ${className}`}
        placeholderTextColor="#9ca3af"
        {...props}
      />
      {error && <Text className="text-red-500 text-xs mt-1">{error}</Text>}
    </View>
  );
}