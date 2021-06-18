import styled from 'styled-components/native';

interface MainContainerProps {}

export const MainContainer = styled.TouchableOpacity`
  border-bottom-width: 1px;
  border-bottom-color: #6e798333;
  padding-bottom: 16px;
  margin-top: 22px;
  flex-direction: row;
  height: 141px;
  align-items: center;
`;

export const PreviewImage = styled.Image``;

export const PreviewImageWrapper = styled.View`
  border-left-width: 3px;
  border-left-color: ${({ theme }) => theme.colors.orange};
  border-bottom-right-radius: 16px;
  height: 96px;
`;

export const InfoWrapper = styled.View`
  margin-left: 24px;
  flex: 1;
  height: 100%;
  justify-content: space-evenly;
`;

export const Info = styled.Text`
  font-family: 'Inter-Regular';
  font-size: 17px;
  line-height: 25.5px;
`;
