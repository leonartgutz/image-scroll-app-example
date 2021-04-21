import React from 'react';
import { BtnBody, BtnText } from './style';

interface Props {
  isRound: boolean,
  size: string,
  type: string,
  isDisabled: boolean,
  text: string
}

const MyButton: React.FC<Props> = ({ text, isDisabled, size, isRound, type }) => (
  <BtnBody isDisabled={isDisabled} size={size} isRound={isRound} type={type}>
    <BtnText isDisabled={isDisabled} size={size} type={type}>{text}</BtnText>
  </BtnBody>
);

export default MyButton;
