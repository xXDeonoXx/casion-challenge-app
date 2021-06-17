import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { View, Text } from 'react-native';
import Home from '../pages/Home';
import Header from '../components/Header';
import { useTheme } from 'styled-components';

const AppRoutes = () => {
  const Stack = createStackNavigator();
  const theme = useTheme();

  return (
    <Stack.Navigator
      screenOptions={{
        header: ({}) => {
          return <Header />;
        },
        cardStyle: { backgroundColor: '#FFFFFF' },
      }}
    >
      <Stack.Screen
        name={'Home'}
        component={Home}
        // options={{
        //   header: () => {
        //     return <Header />;
        //   },
        // }}
      />
    </Stack.Navigator>
  );
};

export default AppRoutes;
