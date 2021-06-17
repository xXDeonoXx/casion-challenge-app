import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import Routes from './src/routes';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components';
import getTheme, { ThemesTypes } from './theme';
import * as Font from 'expo-font';

/**
 * Esse App foi desenvolvido para o seguinte desafio: https://github.com/davilson/casion-tech-goodies-tests/tree/master/casion-test-full-stack
 */

export default function App() {
  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        'Inter-SemiBold': {
          uri: require('./assets/fonts/Inter/static/Inter-SemiBold.ttf'),
        },
        'Inter-Regular': {
          uri: require('./assets/fonts/Inter/static/Inter-Regular.ttf'),
        },
        'Inter-Light': {
          uri: require('./assets/fonts/Inter/static/Inter-Light.ttf'),
        },
        'PT-Serif-Regular': {
          uri: require('./assets/fonts/PT_Serif/PTSerif-Regular.ttf'),
        },
        'PT-Serif-Bold': {
          uri: require('./assets/fonts/PT_Serif/PTSerif-Bold.ttf'),
        },
        'PT-Serif-BoldItalic': {
          uri: require('./assets/fonts/PT_Serif/PTSerif-BoldItalic.ttf'),
        },
      });
    };
    loadFonts();
  }, []);

  return (
    <NavigationContainer>
      <ThemeProvider theme={getTheme(ThemesTypes.DEFAULT)}>
        <Routes />
      </ThemeProvider>
    </NavigationContainer>
  );
}
