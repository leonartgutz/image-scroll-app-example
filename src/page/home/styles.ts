import styled from 'styled-components/native';
import { darkBg, primary } from '../../styles/colors';
import remCalc from '../../utils/remCalc';

export const HomeBody = styled.View`
  display: flex;
  align-items: center;
`;

export const Scroll = styled.FlatList`
  
`;

export const ImgBody = styled.ImageBackground`
  border: 1px solid ${primary};
  width: 350px;
  height: 350px;
  margin: ${remCalc(1)};
`;
