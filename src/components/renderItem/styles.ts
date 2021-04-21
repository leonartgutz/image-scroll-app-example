import styled from 'styled-components/native';
import { accent, darkBg } from '../../styles/colors';
import remCalc from '../../utils/remCalc';

export const ImgBody = styled.ImageBackground`
border: 5px solid ${accent};
width: 350px;
height: 350px;
margin: ${remCalc(1)};
border-radius: 12px;
box-shadow: 1px 5px 5px ${darkBg};
`;
