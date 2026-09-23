import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
 
import { Task } from '../types/Task';
 
type Props = {
  task: Task;
  onToggle: (id: string) => void;
  onEdit: (task: Task) => void;
  onDelete: (id: string) => void;
};
 
export default function TaskItem({
  task,
  onToggle,
  onEdit,
  onDelete,
}: Props) {
  return (
    <View style={styles.task}>
      <TouchableOpacity
        style={styles.taskContent}
        onPress={() => onToggle(task.id)}
      >
        <Text
          style={[
            styles.taskTitle,
            task.completed && styles.completed,
          ]}
        >
          {task.title}
        </Text>
 
        <Text style={styles.description}>
          {task.description}
        </Text>
 
        <Text style={styles.status}>
          {task.completed ? 'Concluída' : 'Pendente'}
        </Text>
      </TouchableOpacity>
 
      <View style={styles.actions}>
        <TouchableOpacity onPress={() => onEdit(task)}>
          <Text style={styles.edit}>
            Editar
          </Text>
        </TouchableOpacity>
 
        <TouchableOpacity onPress={() => onDelete(task.id)}>
          <Text style={styles.delete}>
            Excluir
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
 
const styles = StyleSheet.create({
  task: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    marginBottom: 12,
  },
 
  taskContent: {
    marginBottom: 12,
  },
 
  taskTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 6,
  },
 
  completed: {
    textDecorationLine: 'line-through',
    color: '#999',
  },
 
  description: {
    color: '#666',
    marginBottom: 8,
  },
 
  status: {
    color: '#2563eb',
    fontSize: 13,
  },
 
  actions: {
    flexDirection: 'row',
    gap: 20,
  },
 
  edit: {
    color: '#2563eb',
    fontWeight: 'bold',
  },
 
  delete: {
    color: '#dc2626',
    fontWeight: 'bold',
  },
});