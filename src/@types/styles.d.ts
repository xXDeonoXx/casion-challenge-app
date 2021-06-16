import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      black: string;
      orange: string;
      gray: string;
    };
  }
}
