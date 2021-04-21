import styled from 'styled-components/native';
import { BtnBodyColor, BtnBodySize, BtnTextSize, BtnTextColor } from './mixins';

interface BodyProps {
  readonly isRound: boolean;
  readonly size: string;
  readonly type: string;
  readonly isDisabled: boolean;
}

interface TextProps {
  readonly size: string;
  readonly type: string;
  readonly isDisabled: boolean;
}

export const BtnBody = styled.Pressable<BodyProps>`
  ${(props) => (BtnBodySize(props.size))}
  border-radius: ${(props) => (props.isRound ? '10px' : '0')};
  ${(props) => (BtnBodyColor(props.type))}
`;

export const BtnText = styled.Text<TextProps>`
  ${(props) => (BtnTextSize(props.size))}
  text-align: center;
  ${(props) => (BtnTextColor(props.type))}
  font-weight: bold;
`;
