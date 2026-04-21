import React from 'react';
import { TouchableOpacity, Text, TouchableOpacityProps, ActivityIndicator } from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  label: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'danger';
  isLoading?: boolean;
}

export function Button({ label, variant = 'primary', isLoading, className, ...props }: ButtonProps) {
  const getVariantStyles = () => {
    switch (variant) {
      case 'secondary': return 'bg-gray-200';
      case 'outline': return 'border border-blue-600 bg-transparent';
      case 'danger': return 'bg-red-500';
      case 'primary':
      default: return 'bg-blue-600';
    }
  };

  const getVariantTextStyles = () => {
    switch (variant) {
      case 'secondary': return 'text-gray-800';
      case 'outline': return 'text-blue-600';
      case 'danger': return 'text-white';
      case 'primary':
      default: return 'text-white';
    }
  };

  return (
    <TouchableOpacity
      className={`flex-row justify-center items-center py-3 px-4 rounded-lg ${getVariantStyles()} ${isLoading ? 'opacity-70' : ''} ${className}`}
      disabled={isLoading || props.disabled}
      {...props}
    >
      {isLoading ? (
        <ActivityIndicator color={variant === 'outline' || variant === 'secondary' ? '#2563eb' : '#ffffff'} />
      ) : (
        <Text className={`text-base font-semibold ${getVariantTextStyles()}`}>{label}</Text>
      )}
    </TouchableOpacity>
  );
}