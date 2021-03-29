import React from 'react';
import styled from 'styled-components';
import { CardTitle } from '../Card';

const CardDestaqueContent = styled.section`
  display: flex;
  justify-content: center;
  max-width: 900px;
  margin: 0 auto;
  margin-bottom: 30px;
  border: 2px solid black;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    max-width: 380px;
    order: 1;
  }
`

export const CardImage = styled.div`
  flex: 2; 
  padding-top: 150px;
  padding-bottom: 150px;
  background-image: url('/icons/capa1.jpg');
  background-position: center;
  background-size: cover;
`

const CardText = styled.div`
  flex: 1;
  background-color: #434;
  @media only screen and (max-width: 600px) {
    background-color: transparent;
    p {
      display: none;
    }
  }
`

export default function CardDestaque({title, text}) {
  return (
    <CardDestaqueContent>
      <CardImage></CardImage>
      <CardText>
        <CardTitle>{title}</CardTitle>
        <p>{text}</p>
      </CardText>
  </CardDestaqueContent>
  );
}