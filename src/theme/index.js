import {typographyVariants} from './typographyVariants';

export const colors = {
  background: {
    secondy: {
      color: '#32A852',
    },
    main: {
      color: '#020D05',
    },
  },
  primary: {
    main: {
      color: '#D7385E',
      contrastText: '#fff',
    },
  },
  modes: {
    dark: {},
  }
};

export default {
  colors,
  breakpoints: {
    md: 500, // medium
    lg: 600, // large
  },
  typographyVariants
}