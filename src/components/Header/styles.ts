import styled from 'styled-components/native';

interface MainContainerProps {
  backgroundColor?: string;
}

interface LogoContainerProps {
  logoAlignment?: 'flex-start' | 'center' | 'flex-end';
}

export const MainContainer = styled.View<MainContainerProps>`
  align-items: center;
  width: 100%;
  height: 100px;
  padding-top: 50px;
  background-color: ${({ backgroundColor }) => backgroundColor || 'white'};
  /* border: 1px solid blue; */
  padding-left: 12px;
  padding-right: 12px;
  /* padding-top: 5px;
  padding-bottom: 5px; */
`;

export const LogoContainer = styled.View<LogoContainerProps>`
  /* position: absolute; */
  align-self: ${({ logoAlignment }) =>
    logoAlignment ? logoAlignment : 'center'};
`;
