import React from 'react';
import styled from 'styled-components';

const LogoBox = styled.a`
  background-color: #15702e;
  color: white;
  padding: 10px;
  font-size: 2rem;
`

export default function Logo() {
  return (
    <LogoBox>
      <i class="fas fa-laptop"></i>
    </LogoBox>
  );
}