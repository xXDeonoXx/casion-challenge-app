import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
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
import { useNavigation } from '@react-navigation/native';

const index = () => {
  const [loading, setLoading] = useState(true);
  const [pubs, setPubs] = useState<Publication[]>([]);
  const navigator = useNavigation();

  useEffect(() => {
    const func = async () => {
      const response = await api.get('/publication');
      setPubs(response.data);
      setLoading(false);
    };
    func();
  }, []);

  if (loading) return <ActivityIndicator />;

  return (
    <MainContainer>
      <Container>
        <Header />

        <FeaturedWrapper
          onPress={() => {
            navigator.navigate('Details', {
              pub: pubs[0],
            });
          }}
        >
          <BannerImage
            source={{ uri: pubs[0].image_url }}
            resizeMode={'cover'}
          />

          <Label>DESTAQUE</Label>
          <FeaturedMainText>{pubs[0].title}</FeaturedMainText>
          <ThinLabel>LEIA AGORA -{'>'}</ThinLabel>
        </FeaturedWrapper>
        <BoldLabel>Todas as notícias</BoldLabel>

        {pubs.map((pub) => {
          return <NewsPreviewCard key={pub._id} pub={pub} />;
        })}
      </Container>
    </MainContainer>
  );
};

export default index;
