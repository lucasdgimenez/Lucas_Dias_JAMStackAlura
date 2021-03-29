import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import NavBar from './NavBar';

const Header = styled.header`
  background-color: blue;
  display: flex;
  justify-content: space-around;
`;

export default function Cabecalho() {
  return (
    <Header>
      <Logo/>
      <NavBar opcoes={{
        about: 'Sobre mim',
        contact: 'Contato'
      }}/>
    </Header>
  );
}