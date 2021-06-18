import styled from 'styled-components/native';

interface MainContainerProps {
  backgroundColor?: string;
  logoAlignment?: boolean;
}

export const MainContainer = styled.View<MainContainerProps>`
  align-items: center;
  width: 100%;
  height: 52px;
  background-color: ${({ backgroundColor }) => backgroundColor || 'white'};
  padding-left: 24px;
  padding-right: 24px;
  flex-direction: row;
  justify-content: ${({ logoAlignment }) =>
    logoAlignment ? 'space-between' : 'center'};
`;

export const LogoContainer = styled.View`
  height: 100%;
  justify-content: center;
`;

export const BackButton = styled.TouchableHighlight`
  justify-content: center;
`;

export const BackText = styled.Text`
  font-size: 12px;
  font-family: 'Inter-Regular';
`;

export const BackButtonText = styled.Text`
  font-size: 12px;
  font-family: 'PT-Serif-Italic';
`;
