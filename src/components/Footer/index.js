import React from 'react';
import styled from 'styled-components';

const Footer = styled.footer`
  background-color: blue;
  display: flex;
  justify-content: space-around;
`;

const Option = styled.a`
  margin: 5px;
  font-size: 3rem;
`;

function RodapeIcon() {
  return (
    <div style={{backgroundColor: 'pink'}}>
      <Option 
        href="https://github.com/lucasdgimenez"
        target="_blank"
      >
        <i class="fab fa-github"></i>
      </Option>
      <Option 
        href="https://www.linkedin.com/in/lucasdgimenez/"
        target="_blank"
      >
        <i class="fab fa-linkedin"></i>
      </Option>
    </div>
  )
}

export default function Cabecalho() {
  return (
    <Footer>
      <RodapeIcon/>
    </Footer>
  )
}