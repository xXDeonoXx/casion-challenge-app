import React from 'react';
import { View, Text } from 'react-native';

import CasinoLogo from '../../../assets/casion-logo.svg';

import { BannerImage, Container, MainContainer } from './styles';

const index = () => {
  const banner = require('../../../assets/home/main-banner.png');

  return (
    <MainContainer>
      <Container>
        <BannerImage source={banner} resizeMode={'contain'} />
      </Container>
    </MainContainer>
  );
};

export default index;
