/* eslint-disable no-unused-expressions */
import React from 'react';
import { BtnBody, BtnText } from './styles';

interface Props {
  isRound: boolean,
  size: string,
  type: string,
  isDisabled: boolean,
  text: string,
  onPress(): any,
  onLongPress(): any
}

const MyButton: React.FC<Props> = ({ text, isDisabled, size, isRound, type, onPress, onLongPress }) => (
  <BtnBody
    isDisabled={isDisabled}
    size={size}
    isRound={isRound}
    type={type}
    onPress={onPress}
    onLongPress={onLongPress}
  >
    <BtnText isDisabled={isDisabled} size={size} type={type}>
      {text}
    </BtnText>
  </BtnBody>
);

export default MyButton;
