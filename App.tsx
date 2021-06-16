import 'react-native-gesture-handler';
import React from 'react';
import Routes from './src/routes';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components';
import getTheme, { ThemesTypes } from './theme';

export default function App() {
  return (
    <NavigationContainer>
      <ThemeProvider theme={getTheme(ThemesTypes.DEFAULT)}>
        <Routes />
      </ThemeProvider>
    </NavigationContainer>
  );
}
