import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-style: normal;
  font-weight: normal;
  font-size: 60px;
  line-height: 72px;
  text-align: center;
  text-transform: uppercase;
  text-align: center;
  @media only screen and (max-width: 450px) {
    font-size: 36px;
    line-height: 43px;
  }
`

export default function SectionTitle({ children }) {
  return (
    <Title>
      {children}
    </Title>
  );
}