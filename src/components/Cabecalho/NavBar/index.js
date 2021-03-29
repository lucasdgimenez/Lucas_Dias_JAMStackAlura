import React from 'react';
import styled from 'styled-components';

const NavBarBox = styled.nav`
  background-color: green;
  color: white;
  display: flex;
`;

const OptionMenu = styled.a`
  font-style: normal;
  font-weight: normal;
  font-size: 28px; 
  line-height: 34px;
  @media only screen and (max-width: 450px) {
    font-size: 18px;
    line-height: 22px;
  }
  /* identical to box height */
  text-align: center;
  text-transform: capitalize;
  margin: 10px;
  &:hover {
    text-decoration: underline;
  }
`

export default function NavBar({opcoes}) {
  return (
    <NavBarBox>
      <OptionMenu 
        href="https://globoesporte.globo.com/rj/futebol/campeonato-carioca/"
      >
        {opcoes.about}
      </OptionMenu>
      <OptionMenu 
        href="https://globoesporte.globo.com/rj/futebol/campeonato-carioca/"
      >
        {opcoes.contact}
      </OptionMenu>
    </NavBarBox>
  );
}