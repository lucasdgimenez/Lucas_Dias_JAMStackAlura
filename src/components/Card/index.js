import React from 'react';
import styled from 'styled-components';

const CardContent = styled.section`
  margin-right: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const CardTitle = styled.h1`
  color: black;
  background-color: white;
  padding: 10px;
  text-align: center;
  font-size: 2rem;
  margin-top: 4px;
`

export default function Card({image, title}) {
  return (
    <CardContent>
      <img
        src={`icons/${image}.jpg`}
        alt="teste"
      />
      <CardTitle>
        {title}
      </CardTitle>    
    </CardContent>    
  );
}