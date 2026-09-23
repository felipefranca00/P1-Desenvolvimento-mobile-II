import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
} from 'react-native';
 
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import { Task } from '../types/Task';
import Button from '../components/Button';
 
type Props = NativeStackScreenProps<
  RootStackParamList,
  'EditTask'
> & {
  onUpdateTask: (task: Task) => void;
};
 
export default function EditTaskScreen({
  navigation,
  route,
  onUpdateTask,
}: Props) {
  const task = route.params.task;
 
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(
    task.description
  );
 
  function handleUpdate() {
    if (!title.trim()) {
      return;
    }
 
    onUpdateTask({
      ...task,
      title,
      description,
    });
 
    navigation.goBack();
  }
 
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Título</Text>
 
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={setTitle}
      />
 
      <Text style={styles.label}>Descrição</Text>
 
      <TextInput
        style={[styles.input, styles.textArea]}
        value={description}
        onChangeText={setDescription}
        multiline
      />
 
      <Button
        title="Salvar alterações"
        onPress={handleUpdate}
        variant="success"
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