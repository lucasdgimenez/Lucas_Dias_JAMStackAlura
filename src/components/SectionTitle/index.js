import React from 'react';
import styled, {css} from 'styled-components';
import { breakpointsMedia } from '../../theme/utils/breakpointsMedia';

const Title = styled.h1`
  font-style: normal;
  font-weight: normal;
  text-align: center;
  text-transform: uppercase;
  text-align: center;
  ${breakpointsMedia({
    md: css`
      font-size: 36px;
      line-height: 43px;
    `,
    lg: css`
      font-size: 60px;
      line-height: 72px;
    `
  })}
`

export default function SectionTitle({ children }) {
  return (
    <Title>
      {children}
    </Title>
  );
}