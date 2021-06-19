import React from 'react';
import { View, Text } from 'react-native';
import Label from '../../components/Label';

import CasinoLogo from '../../../assets/casion-logo.svg';

import {
  BannerImage,
  Container,
  Title,
  MainContainer,
  FeaturedWrapper,
  SubTitle,
  MainText,
  Wrapper,
} from './styles';
import NewsPreviewCard from '../../components/NewsPreviewCard';
import Header from '../../components/Header';
import { RouteProp, useRoute } from '@react-navigation/native';
import Publication from '../../models/Publication';

const index: React.FC = () => {
  const banner = require('../../../assets/home/main-banner.png');
  const route: RouteProp<{ params: { pub: Publication } }, 'params'> =
    useRoute();

  return (
    <MainContainer>
      <Container>
        <Header logoAlignment={'flex-end'} backgroundColor={'#fafcfb'} />
        <BannerImage
          source={{ uri: route.params.pub.image_url }}
          resizeMode={'cover'}
        />
        <Wrapper>
          <FeaturedWrapper>
            <Label>{route.params.pub.category}</Label>
            <Title>{route.params.pub.title}</Title>
            <SubTitle>{route.params.pub.subTitle}</SubTitle>
            <MainText>
              {JSON.parse(`{"text": "${route.params.pub.body}"}`).text}
            </MainText>
          </FeaturedWrapper>
        </Wrapper>
      </Container>
    </MainContainer>
  );
};

export default index;
