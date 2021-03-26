import React from 'react';
import styled from 'styled-components';

const NavBarBox = styled.nav`
  background-color: orange;
  color: white;
  display: flex;
`;

export default function NavBar() {
  return (
    <NavBarBox>
      <li>Sobre mim</li>
      <li>Contato</li>
    </NavBarBox>
  );
}