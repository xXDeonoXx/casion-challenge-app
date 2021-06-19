import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text } from 'react-native';
import Publication from '../../models/Publication';
import Label from '../Label';

import {
  Info,
  InfoWrapper,
  MainContainer,
  PreviewImage,
  PreviewImageWrapper,
} from './styles';

interface Props {
  pub: Publication;
}

const index: React.FC<Props> = ({ pub }) => {
  const navigator = useNavigation();
  return (
    <MainContainer
      onPress={() => {
        navigator.navigate('Details', {
          pub,
        });
      }}
    >
      <PreviewImageWrapper>
        <PreviewImage source={{ uri: pub.image_url }} />
      </PreviewImageWrapper>
      <InfoWrapper>
        <Label>{pub.category}</Label>
        <Info>{pub.title}</Info>
      </InfoWrapper>
    </MainContainer>
  );
};

export default index;
