import 'react-native-gesture-handler';
import React from 'react';
import Routes from './src/routes';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components';
import getTheme, { ThemesTypes } from './theme';

/**
 * Esse App foi desenvolvido para o seguinte desafio: https://github.com/davilson/casion-tech-goodies-tests/tree/master/casion-test-full-stack
 */

export default function App() {
  return (
    <NavigationContainer>
      <ThemeProvider theme={getTheme(ThemesTypes.DEFAULT)}>
        <Routes />
      </ThemeProvider>
    </NavigationContainer>
  );
}
