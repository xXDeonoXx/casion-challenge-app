import React from 'react';
import { View, Text } from 'react-native';

import CasinoLogo from '../../../assets/casion-logo.svg';

import { MainContainer } from './styles';

const index = () => {
  return (
    <MainContainer>
      <Text>Home Screen</Text>
      <CasinoLogo />
    </MainContainer>
  );
};

export default index;
