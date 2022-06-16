import React from 'react';
import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/Routes';
import AuthProvider from './src/Contexts';
import AnimationProvider from './src/Contexts/animation.js';
import ExercicioProvider from './src/Contexts/Api';
import AnimationExerProvider from './src/Contexts/animationExer';

export default function App() {
  console.disableYellowBox = true
  return(
    <NavigationContainer>
      <StatusBar hidden/>
      <ExercicioProvider>
        <AnimationProvider>
          <AuthProvider>
            <ExercicioProvider>
              <AnimationExerProvider>
              < Routes/>
              </AnimationExerProvider>
            </ExercicioProvider>
          </AuthProvider>
        </AnimationProvider>
      </ExercicioProvider>
    </NavigationContainer>
  )
}