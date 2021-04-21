import styled from 'styled-components/native';
import remCalc from '../../utils/remCalc';

export const HomeBody = styled.View`
  display: flex;
  align-items: center;
`;

export const Scroll = styled.FlatList`
  margin-bottom: ${remCalc(1)}
`;
