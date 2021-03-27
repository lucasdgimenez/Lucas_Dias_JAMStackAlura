import React from 'react';
import styled from 'styled-components';
import Card from '../Card';
import CardDestaque from '../CardDestaque';
import SectionTitle from '../SectionTitle';

const WrapperProj = styled.section`
  background-color: orange;
  color: black;
`

export default function WrapperProjeos() {
  return (
    <WrapperProj>
      <SectionTitle />
      <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
        <Card 
          image="capa1"
          title="Titulo 1"
        />
        <Card 
          image="capa2"
          title="Titulo 2"
        />
        <Card 
          image="capa1"
          title="Titulo 3"
        />
      </div>
      <CardDestaque
        image="capa1"
        title="Titulo 4"
      />
    </WrapperProj>
  );
}