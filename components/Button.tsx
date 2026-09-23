import React from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
} from 'react-native';
 
type Props = {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'success' | 'danger';
  style?: ViewStyle;
};
 
export default function Button({
  title,
  onPress,
  variant = 'primary',
  style,
}: Props) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        variant === 'primary' && styles.primary,
        variant === 'success' && styles.success,
        variant === 'danger' && styles.danger,
        style,
      ]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}
 
const styles = StyleSheet.create({
  button: {
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
 
  primary: {
    backgroundColor: '#2563eb',
  },
 
  success: {
    backgroundColor: '#16a34a',
  },
 
  danger: {
    backgroundColor: '#dc2626',
  },
 
  text: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});