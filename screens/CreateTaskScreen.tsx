import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
} from 'react-native';
 
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import Button from '../components/Button';
 
type Props = NativeStackScreenProps<
  RootStackParamList,
  'CreateTask'
> & {
  onAddTask: (title: string, description: string) => void;
};
 
export default function CreateTaskScreen({
  navigation,
  onAddTask,
}: Props) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
 
  function handleCreate() {
    if (!title.trim()) {
      return;
    }
 
    onAddTask(title, description);
    navigation.goBack();
  }
 
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Título</Text>
 
      <TextInput
        style={styles.input}
        placeholder="Digite o título"
        value={title}
        onChangeText={setTitle}
      />
 
      <Text style={styles.label}>Descrição</Text>
 
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Digite a descrição"
        value={description}
        onChangeText={setDescription}
        multiline
      />
 
      <Button
        title="Criar tarefa"
        onPress={handleCreate}
      />
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
 
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 6,
  },
 
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 14,
    marginBottom: 18,
  },
 
  textArea: {
    height: 120,
    textAlignVertical: 'top',
  },
});