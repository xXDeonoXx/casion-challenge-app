import React, { useEffect, useState } from 'react';
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
import NewsPreviewCard from '../../components/NewsPreviewCard';
import Header from '../../components/Header';
import Publication from '../../models/Publication';
import api from '../../services/api';

const index = () => {
  const [pubs, setPubs] = useState<Publication[]>([]);
  const banner = require('../../../assets/home/main-banner.png');

  useEffect(() => {
    const func = async () => {
      const response = await api.get('/publication');
      setPubs(response.data);
    };
    func();
  }, []);

  return (
    <MainContainer>
      <Container>
        <Header />

        <BannerImage source={banner} resizeMode={'contain'} />
        <FeaturedWrapper>
          <Label>DESTAQUE</Label>
          <FeaturedMainText>
            Descubra o sabor de rosquinha que melhor te representa!
          </FeaturedMainText>
          <ThinLabel>LEIA AGORA -{'>'}</ThinLabel>
        </FeaturedWrapper>
        <BoldLabel>Todas as notícias</BoldLabel>

        {pubs.map((pub) => {
          return <NewsPreviewCard key={pub.id} pub={pub} />;
        })}
      </Container>
    </MainContainer>
  );
};

export default index;
