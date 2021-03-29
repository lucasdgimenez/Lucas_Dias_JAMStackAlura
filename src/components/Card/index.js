import React from 'react';
import styled from 'styled-components';
import {CardImage} from '../CardDestaque';

const CardContent = styled.section`
  margin-right: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 2px solid black;
  margin-bottom: 10px;
  @media only screen and (max-width: 600px) {
    width: 370px;
    img {
      height: 290px;
    }
    h1 {
      margin-bottom: 7px;
    }
  }
`

export const CardTitle = styled.h1`
  color: black;
  background-color: white;
  text-align: center;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 38px;
  text-align: center;
  text-transform: capitalize;
  margin-top: 4px;
  margin: 0;
  padding: 10px;
  @media only screen and (max-width: 600px) {
    margin-bottom: 8px;
    padding: 10px;
  }
`

export default function Card({image, title}) {
  return (
    <CardContent>
      <CardImage 
        style={{
          backgroundImage: 'url(/icons/capa1.jpg)',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          paddingTop: '150px',
          paddingBottom: '150px',
          paddingRight: '160px',
          paddingLeft: '130px'
        }}
      >
      </CardImage>
      <CardTitle>
        {title}
      </CardTitle>    
    </CardContent>    
  );
}