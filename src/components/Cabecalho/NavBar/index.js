import React from 'react';
import styled from 'styled-components';

const NavBarBox = styled.nav`
  background-color: #15702e;
  color: white;
  display: flex;
`;

const OptionMenu = styled.a`
  color: white;
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
        href="#"
      >
        {opcoes.about}
      </OptionMenu>
      <OptionMenu 
        href="#"
      >
        {opcoes.contact}
      </OptionMenu>
    </NavBarBox>
  );
}