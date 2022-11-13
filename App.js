import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import NavStack from './src/nav/nav-stack';
import './ignoreWarnings';

export default function App() {
  return (
    <NavigationContainer>
      <NavStack />
    </NavigationContainer>
  );
}
