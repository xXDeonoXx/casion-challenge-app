import React from 'react';
import { View, Text } from 'react-native';
import Label from '../../components/Label';

import CasinoLogo from '../../../assets/casion-logo.svg';

import {
  BannerImage,
  Container,
  FeaturedMainText,
  MainContainer,
  FeaturedWrapper,
  ThinLabel,
  BoldLabel,
} from './styles';

const index = () => {
  const banner = require('../../../assets/home/main-banner.png');

  return (
    <MainContainer>
      <Container>
        <BannerImage source={banner} resizeMode={'contain'} />
        <FeaturedWrapper>
          <Label>DESTAQUE</Label>
          <FeaturedMainText>
            Descubra o sabor de rosquinha que melhor te representa!
          </FeaturedMainText>
          <ThinLabel>LEIA AGORA -{'>'}</ThinLabel>
        </FeaturedWrapper>
        <BoldLabel>Todas as notícias</BoldLabel>
      </Container>
    </MainContainer>
  );
};

export default index;
