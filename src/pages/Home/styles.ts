import { Platform, StatusBar } from 'react-native';
import styled from 'styled-components/native';

export const MainContainer = styled.SafeAreaView`
  flex: 1;
  background-color: white;
  margin: 0px 24px;
`;

export const BannerImage = styled.Image`
  width: 100%;
  height: auto;
  aspect-ratio: ${366 / 200};
`;

export const Container = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    flexGrow: 1,
  },
}))`
  height: 100%;
  width: 100%;
  border: 1px solid red;
  align-self: center;
`;
