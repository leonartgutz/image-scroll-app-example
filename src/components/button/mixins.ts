import remCalc from '../../utils/remCalc';
import { primary, secondary, accent, whiteBg } from '../../styles/colors';

export const BtnBodySize = (size: string): string => {
  switch (size) {
    default:
      return 'width: 350px; padding: 16px;';

    case 'big':
      return 'width: 350px; padding: 16px;';

    case 'medium':
      return 'width: 250px; padding: 16px;';

    case 'small':
      return 'width: 150px; padding: 16px;';
  }
};

export const BtnBodyColor = (type: string): string => {
  switch (type) {
    default:
      return `background: ${accent}`;

    case 'primary':
      return `background: ${primary}`;

    case 'secondary':
      return `background: ${secondary}`;

    case 'accent':
      return `background: ${accent}`;
  }
};

export const BtnTextSize = (size: string): string => {
  switch (size) {
    default:
      return `font-size: ${remCalc(1.5)}`;

    case 'big':
      return `font-size: ${remCalc(1.5)}`;

    case 'medium':
      return `font-size: ${remCalc(1.2)}`;

    case 'small':
      return `font-size: ${remCalc(1)}`;
  }
};

export const BtnTextColor = (type: string): string => {
  switch (type) {
    default:
      return `color: ${primary}`;

    case 'primary':
      return `color: ${whiteBg}`;

    case 'secondary':
      return `color: ${whiteBg}`;

    case 'accent':
      return `color: ${primary}`;
  }
};
