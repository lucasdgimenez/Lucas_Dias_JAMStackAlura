/* eslint-disable func-names */
/* eslint-disable consistent-return */
import { breakpointsMedia } from './breakpointsMedia';

export function propToStyle(propName) {
  return function (props) {
    const propValue = props[propName];
    if (typeof propValue === 'string' || typeof propValue === 'number') {
      return {
        // textAlign: props que o objeto recebe no componente
        [propName]: propValue,
      };
    }
    if (typeof propValue === 'object') {
      return breakpointsMedia({
        xs: {
          [propName]: propValue.xs,
        },
        sm: {
          [propName]: propValue.sm,
        },
        md: {
          [propName]: propValue.md,
        },
        lg: {
          [propName]: propValue.lg,
        },
        xl: {
          [propName]: propValue.xl,
        },
      });
    }
  };
}