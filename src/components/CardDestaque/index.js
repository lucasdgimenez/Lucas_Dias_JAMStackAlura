import React from 'react';
import styled from 'styled-components';
import { CardTitle } from '../Card';

const CardDestaqueContent = styled.section`
  display: grid;
  max-width: 880px;
  margin: auto;
  border: 3px solid black;
  grid: 
    "image image title" 6rem
    "image image testando" 14rem
  / 1fr 1fr 1fr;
  @media only screen and (max-width: 600px) {
    background-color: pink;
  }
`

const CardText = styled.p`
  background-color: white;
  color: black;
  grid-area: testando;
  margin-top: -10px;
`

const CardImage = styled.div`
  grid-area: image;
  background-image: url('icons/capa1.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  margin-right: 8px;

`

export default function CardDestaque({image, title}) {
  return (
    <CardDestaqueContent>
      <CardImage>
       
      </CardImage>  
      <CardTitle>
        {title}
      </CardTitle>
      <CardText>
        Hahaha
      </CardText>
    </CardDestaqueContent>    
  );
}