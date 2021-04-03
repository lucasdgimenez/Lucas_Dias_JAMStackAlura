import React from 'react';
import Logo from './Logo';
import styled from "styled-components";
import { MenuWrapper } from './styles/MenuWrapper';
import PropTypes from 'prop-types';
import Text from '../Text';

const OptionMenu = styled(Text)`
  color: white;
  font-style: normal;
  font-weight: normal;
  font-size: 28px; 
  line-height: 34px;
  @media only screen and (max-width: 550px) {
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

export default function Cabecalho({opcoes}) {
  return (
    <MenuWrapper>
      <MenuWrapper.Logo
        href="#"
      >
        <Logo/>
      </MenuWrapper.Logo>
      <MenuWrapper.Opcoes>
        <OptionMenu 
          href="#"
          tag="a"
          variant="menu"
        >
          {opcoes.about}
        </OptionMenu>
        <OptionMenu 
          href="#"
          tag="a"
          variant="menu"
        >
          {opcoes.contact}
        </OptionMenu>
      </MenuWrapper.Opcoes>
    </MenuWrapper>
  );
}

Cabecalho.propTypes = {
  opcoes: PropTypes.node.isRequired
}