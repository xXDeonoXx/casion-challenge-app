import { ColorSchemeName } from 'react-native';
import { DefaultTheme } from 'styled-components';

// Para adicionar novas properties va em @types no arquivo StyleSheet.d.ts

export enum ThemesTypes {
  DEFAULT = 'default',
}

const Themes = {
  DefaultTheme: {
    colors: {
      black: '#112233',
      orange: '#FF9F05',
      gray: '#6E7983',
    },
  },
};

export default function getTheme(theme: ThemesTypes) {
  return Themes['DefaultTheme'];
}
