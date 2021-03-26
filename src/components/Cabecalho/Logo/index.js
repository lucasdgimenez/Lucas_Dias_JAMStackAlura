import React from 'react';
import styled from 'styled-components';

const LogoBox = styled.a`
  background-color: orange;
  color: white;
  padding: 10px;
`

export default function Logo() {
  return (
    <LogoBox>
      ME
    </LogoBox>
  );
}