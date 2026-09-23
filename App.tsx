import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import CreateTaskScreen from './screens/CreateTaskScreen';
import EditTaskScreen from './screens/EditTaskScreen';
import { Task } from '././types/Task';

export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  CreateTask: undefined;
  EditTask: {
    task: Task;
  };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function addTask(title: string, description: string) {
    const newTask: Task = {
      id: Date.now().toString(),
      title,
      description,
      completed: false,
    };

    setTasks((currentTasks) => [...currentTasks, newTask]);
  }

  function updateTask(updatedTask: Task) {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === updatedTask.id ? updatedTask : task
      )
    );
  }

  function deleteTask(id: string) {
    setTasks((currentTasks) =>
      currentTasks.filter((task) => task.id !== id)
    );
  }

  function toggleTask(id: string) {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          options={{ headerShown: false }}
        >
          {(props) => <LoginScreen {...props} />}
        </Stack.Screen>

        <Stack.Screen
          name="Home"
          options={{
            title: 'Minhas tarefas',
          }}
        >
          {(props) => (
            <HomeScreen
              {...props}
              tasks={tasks}
              onDelete={deleteTask}
              onToggle={toggleTask}
            />
          )}
        </Stack.Screen>

        <Stack.Screen
          name="CreateTask"
          options={{
            title: 'Nova tarefa',
          }}
        >
          {(props) => (
            <CreateTaskScreen
              {...props}
              onAddTask={addTask}
            />
          )}
        </Stack.Screen>

        <Stack.Screen
          name="EditTask"
          options={{
            title: 'Alterar tarefa',
          }}
        >
          {(props) => (
            <EditTaskScreen
              {...props}
              onUpdateTask={updateTask}
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
