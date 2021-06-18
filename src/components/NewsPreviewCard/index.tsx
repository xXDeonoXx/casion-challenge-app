import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text } from 'react-native';
import Label from '../Label';

import {
  Info,
  InfoWrapper,
  MainContainer,
  PreviewImage,
  PreviewImageWrapper,
} from './styles';

const index = () => {
  const preview = require('../../../assets/home/preview.png');
  const navigator = useNavigation();
  return (
    <MainContainer
      onPress={() => {
        navigator.navigate('Details');
      }}
    >
      <PreviewImageWrapper>
        <PreviewImage source={preview} />
      </PreviewImageWrapper>
      <InfoWrapper>
        <Label>LIFESTYLE</Label>
        <Info>Descubra o sabor de rosquinha que melhor te representa!</Info>
      </InfoWrapper>
    </MainContainer>
  );
};

export default index;
