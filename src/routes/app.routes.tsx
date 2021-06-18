import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { View, Text } from 'react-native';
import Home from '../pages/Home';
import Header from '../components/Header';
import { useTheme } from 'styled-components';
import DetailsScreen from '../pages/DetailsScreen';

const AppRoutes = () => {
  const Stack = createStackNavigator();
  const theme = useTheme();

  return (
    <Stack.Navigator
      screenOptions={{
        header: ({}) => {
          return <View style={{ height: 50 }}></View>;
        },
        // headerShown: false,
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
      <Stack.Screen
        name={'Details'}
        component={DetailsScreen}
        // options={{
        //   header: () => {
        //     return <Header logoAlignment={'flex-end'} />;
        //   },
        // }}
      />
    </Stack.Navigator>
  );
};

export default AppRoutes;
