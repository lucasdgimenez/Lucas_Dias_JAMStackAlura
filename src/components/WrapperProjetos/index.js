import React from 'react';
import styled from 'styled-components';
import Card from '../Card';
import CardDestaque from '../CardDestaque';
import SectionTitle from '../SectionTitle';

const WrapperProj = styled.section`
  background-color: #020d05;
  color: white;
`

export default function WrapperProjeos() {
  return (
    <WrapperProj>
      <SectionTitle>Projetos</SectionTitle>
      <CardDestaque
        title="Money control"
        text="Registre seus gastos, defina as categorias e tenha o controle
        em suas mãos. Os dados permanecem salvos em seu navegador"
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
          image="dash"
          title="Dashboard"
          href="https://isoscq.vercel.app/#/dashboard"
        />
        <Card 
          image="wick"
          title="VueFilmes"
          href="https://vuemovies.vercel.app/"
        />
        <Card 
          image="instalura"
          title="Instalura"
          href="https://instalura-lucas.vercel.app/"
        />
      </div>
    
      
    </WrapperProj>
  );
}