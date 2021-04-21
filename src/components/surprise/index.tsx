/* eslint-disable global-require */
import React from 'react';
import { RickRoll } from './styles';

interface Props {
  isDisable: boolean
}

const Surprise: React.FC<Props> = ({ isDisable }) => (
  <RickRoll source={require('../../../assets/rick.gif')} isDisable={isDisable} />
);

export default Surprise;
