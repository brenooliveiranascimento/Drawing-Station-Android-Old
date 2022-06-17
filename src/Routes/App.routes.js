import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../Pages/Home/index';
import Exercicios from '../Pages/Exercicios/Exercicios';

export default function AppRoutes() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Home"
        component={Home}
      />

      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Exercicios"
        component={Exercicios}
      />
    </Stack.Navigator>
  );
}
