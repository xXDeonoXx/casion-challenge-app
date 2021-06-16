import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { View, Text } from 'react-native';
import Home from '../pages/Home';

const AppRoutes = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          //   backgroundColor: '#ff00ff',
        },
        // headerTintColor: theme.colors.text,
      }}
    >
      <Stack.Screen name={'Home'} component={Home} />
    </Stack.Navigator>
  );
};

export default AppRoutes;
