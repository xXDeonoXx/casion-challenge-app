import React from 'react';
import { View, Text } from 'react-native';
import { LabelText } from './styles';

const index: React.FC = ({ children }) => {
  return <LabelText>{children}</LabelText>;
};

export default index;
