import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const CapaContainer = styled.section`
  background-color: #020d05;
  text-align: center;
  height: 40vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const Titulo = styled.h1`
  font-size: 3rem;
  font-family: 'Rubik';
  color: #32A852;
  text-transform: uppercase;
`

const Subtitulo = styled.p`
  margin-top: -30px;
  font-size: 1.5rem;
  color: #32A852;
  text-transform: uppercase;
`

export default function Capa({titulo, subtitulo}) {
  return (
    <CapaContainer>
      <Titulo>{titulo}</Titulo>
      <Subtitulo>{subtitulo}</Subtitulo>
    </CapaContainer>
  )
}

Capa.propTypes = {
  titulo: PropTypes.string.isRequired,
  subtitulo: PropTypes.string.isRequired,
};