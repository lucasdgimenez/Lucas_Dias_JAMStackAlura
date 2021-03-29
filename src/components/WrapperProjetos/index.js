import React from 'react';
import styled from 'styled-components';
import Card from '../Card';
import CardDestaque from '../CardDestaque';
import SectionTitle from '../SectionTitle';

const WrapperProj = styled.section`
  background-color: #26353E;
  color: white;
`

export default function WrapperProjeos() {
  return (
    <WrapperProj>
      <SectionTitle>Projetos</SectionTitle>
      <CardDestaque
        title="Projeto Report"
        text="aquele texto"
      />
      <div 
        style={{
          display: 'flex', 
          justifyContent: 'center', 
          flexWrap: 'wrap',
          maxWidth: '1000px',
          margin: '0 auto'
        }}
      >
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
    
      
    </WrapperProj>
  );
}