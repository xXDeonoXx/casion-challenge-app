import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import React from 'react';
import { View } from 'react-native';
import { useTheme } from 'styled-components';
import DetailsScreen from '../pages/DetailsScreen';
import Home from '../pages/Home';

const AppRoutes = () => {
  const Stack = createStackNavigator();
  const theme = useTheme();

  const animation = {
    animation: 'spring',
    config: {
      stiffness: 1000,
      damping: 500,
      mass: 3,
      overshootClamping: true,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
    },
  };

  return (
    <Stack.Navigator
      screenOptions={{
        header: ({}) => {
          return <View style={{ height: 50 }}></View>;
        },
        // headerShown: false,
        cardStyle: { backgroundColor: '#FFFFFF' },
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <Stack.Screen name={'Home'} component={Home} />
      <Stack.Screen name={'Details'} component={DetailsScreen} />
    </Stack.Navigator>
  );
};

export default AppRoutes;
