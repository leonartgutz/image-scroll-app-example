import styled from 'styled-components/native';
import remCalc from '../../utils/remCalc';

interface Props {
  readonly isDisable: boolean
}

export const RickRoll = styled.Image<Props>`
  ${(props) => (props.isDisable ? 'display: none' : 'display: flex')}
  margin-top: ${remCalc(1)};
`;
