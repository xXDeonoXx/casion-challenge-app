import styled from 'styled-components/native';

interface MainContainerProps {}

export const LabelText = styled.Text`
  border: 1px solid ${({ theme }) => theme.colors.orange};
  color: ${({ theme }) => theme.colors.orange};
  align-self: flex-start;
  padding: 2px 6px;
  border-bottom-right-radius: 8px;
  font-family: 'Inter-SemiBold';
  font-size: 12px;
  letter-spacing: 0.8px;
`;
