import React from 'react';
import { BtnBody, BtnText } from './styles';

interface Props {
  isRound: boolean,
  size: string,
  type: string,
  isDisabled: boolean,
  text: string,
  onPress(): void
}

const MyButton: React.FC<Props> = ({ text, isDisabled, size, isRound, type, onPress }) => (
  <BtnBody isDisabled={isDisabled} size={size} isRound={isRound} type={type} onPress={onPress}>
    <BtnText isDisabled={isDisabled} size={size} type={type}>{text}</BtnText>
  </BtnBody>
);

export default MyButton;
