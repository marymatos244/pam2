import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/screens/HomeScreen';
import StudiesScreen from './src/screens/StudiesScreen';
import AddStudyScreen from './src/screens/AddStudyScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#6C4AB6',
          },
          headerTintColor: '#FFFFFF',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'StudyFlow',
          }}
        />

        <Stack.Screen
          name="Studies"
          component={StudiesScreen}
          options={{
            title: 'Meus Estudos',
          }}
        />

        <Stack.Screen
          name="AddStudy"
          component={AddStudyScreen}
          options={{
            title: 'Adicionar Estudo',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}