import {View, Text} from 'react-native';
import React from 'react';
import {dataStack} from './nav-data';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function NavStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {dataStack.map((x, i) => (
        <Stack.Screen key={i} name={x.name} component={x.component} />
      ))}
    </Stack.Navigator>
  );
}
