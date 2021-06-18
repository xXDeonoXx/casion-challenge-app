import React from 'react';
import { View, Text } from 'react-native';
import {
  LogoContainer,
  MainContainer,
  BackButton,
  BackButtonText,
  BackText,
} from './styles';
import CasionLogo from '../../../assets/casion-logo.svg';
import { useNavigation } from '@react-navigation/native';

interface Props {
  backgroundColor?: string;
  logoAlignment?: 'flex-start' | 'center' | 'flex-end';
}

const index: React.FC<Props> = ({ logoAlignment, backgroundColor }) => {
  const navigator = useNavigation();
  return (
    <MainContainer
      backgroundColor={backgroundColor}
      logoAlignment={navigator.canGoBack()}
    >
      {navigator.canGoBack() && (
        <BackButton
          onPress={() => {
            navigator.goBack();
          }}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <BackText>{'<'}-</BackText>
            <BackButtonText>Voltar</BackButtonText>
          </View>
        </BackButton>
      )}

      <LogoContainer>
        <CasionLogo />
      </LogoContainer>
    </MainContainer>
  );
};

export default index;
