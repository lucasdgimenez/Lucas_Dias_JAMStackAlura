import React from 'react';
import styled from 'styled-components';

const CapaContainer = styled.section`
  background-color: ${function({ theme }) { 
    return theme.primary.main.color;
  }};
  text-align: center;
  height: 92vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const Titulo = styled.h1`
  font-size: 3rem;
  font-family: 'Rubik';
  color: ${function({ theme }) { 
    return theme.secondary.main.color;
  }};
  background-color: blueviolet;
`

const Subtitulo = styled.p`
  margin-top: -30px;
  font-size: 1.5rem;
  color: ${function({ theme }) { 
    return theme.secondary.main.color;
  }};
  background-color: pink;
`

export default function Capa() {
  return (
    <CapaContainer>
      <Titulo>Lucas Dias</Titulo>
      <Subtitulo>Portfolio</Subtitulo>
    </CapaContainer>
  )
}