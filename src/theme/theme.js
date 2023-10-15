import {scale} from '../utils/scale';
import {
  RUBIK_BOLD,
  RUBIK_SEMI_BOLD,
  RUBIK_MEDIUM,
  RUBIK_REGULAR,
} from '../constants/constants';

const theme = {
  palette: {
    //* Primary (Red):
    PrimaryLight: '#f9fcf5',

    //* Secondary (Yellow):
    SecondaryLight: '#DFBD43',

    //* Typography (Black):
    TypographyLight: '#7d7e7b',
    TypographyDarkBrown: '#444444',

    // borders
    borderColorLight: '#D6D6D6',

    //* Commons
    white: 'white',
    black: 'black',
    transparent: 'transparent',
  },
  typography: {
    type: {
      reg: RUBIK_REGULAR,
      med: RUBIK_MEDIUM,
      semi: RUBIK_SEMI_BOLD,
      bold: RUBIK_BOLD,
    },
  },
  radius: {
    r1: scale(20),
    rounded: 100 / 2,
  },
};

export default theme;
