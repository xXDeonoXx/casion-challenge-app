import React from 'react';
import { View, Text } from 'react-native';
import { LogoContainer, MainContainer } from './styles';
import CasionLogo from '../../../assets/casion-logo.svg';

interface Props {
  backgroundColor?: string;
  logoAlignment?: 'flex-start' | 'center' | 'flex-end';
}

const index: React.FC<Props> = ({ logoAlignment, backgroundColor }) => {
  return (
    <MainContainer backgroundColor={backgroundColor}>
      <LogoContainer logoAlignment={logoAlignment}>
        <CasionLogo />
      </LogoContainer>
    </MainContainer>
  );
};

export default index;
