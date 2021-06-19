import { Platform, StatusBar } from 'react-native';
import styled from 'styled-components/native';

export const MainContainer = styled.SafeAreaView`
  flex: 1;
  background-color: transparent;
  padding: 0px 24px;
`;

export const BannerImage = styled.Image`
  width: 100%;
  height: auto;
  aspect-ratio: ${366 / 200};
  margin-bottom: 16px;
`;

export const FeaturedWrapper = styled.TouchableOpacity`
  margin-top: 18px;
`;

export const FeaturedMainText = styled.Text`
  font-family: 'PT-Serif-BoldItalic';
  font-size: 28px;
  width: 366px;

  padding: 0px 0px;
  margin-top: 18px;
  margin-bottom: 15px;
`;

export const ThinLabel = styled.Text`
  font-size: 12px;
  font-family: 'Inter-Light';
  align-self: flex-end;
`;

export const BoldLabel = styled.Text`
  font-size: 12px;
  font-family: 'PT-Serif-BoldItalic';
  align-self: flex-start;
  color: ${({ theme }) => theme.colors.gray};
`;

/**
 * Container foi mantido no final por questões de visualização de identação
 */

export const Container = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    flexGrow: 1,
  },
}))`
  height: 100%;
  width: 100%;
  /* border: 1px solid red; */
  align-self: center;
`;
