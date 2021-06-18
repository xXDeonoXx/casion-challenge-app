import { Platform, StatusBar } from 'react-native';
import styled from 'styled-components/native';

export const MainContainer = styled.SafeAreaView`
  flex: 1;
  background-color: transparent;
`;

export const Wrapper = styled.View`
  padding: 0px 24px;
`;

export const BannerImage = styled.Image`
  width: 100%;
  height: auto;
  aspect-ratio: ${366 / 200};
`;

export const FeaturedWrapper = styled.View`
  margin-top: 18px;
  margin-bottom: 16px;
`;

export const Title = styled.Text`
  font-family: 'PT-Serif-BoldItalic';
  font-size: 28px;
  width: 366px;

  padding: 0px 0px;
  margin-top: 18px;
  margin-bottom: 15px;
`;

export const SubTitle = styled.Text`
  font-size: 20px;
  font-family: 'PT-Serif-Regular';
  color: ${({ theme }) => theme.colors.gray};
  border-left-width: 3px;
  border-left-color: ${({ theme }) => theme.colors.orange};
  padding-left: 16px;
  margin-bottom: 48px;
`;

export const MainText = styled.Text`
  font-size: 17px;
  font-family: 'Inter-Regular';
  color: ${({ theme }) => theme.colors.black};
  line-height: 29.75px;
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
