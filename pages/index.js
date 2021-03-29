import React from 'react';
import Cabecalho from '../src/components/Cabecalho';
import Capa from '../src/components/Capa';
import Footer from '../src/components/Footer';
import WrapperProjetos from '../src/components/WrapperProjetos';

export default function Home() {
  return (
    <div style={{
      flex: '1',
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'column',
    }}>
      <Capa 
        titulo="Lucas Dias"
        subtitulo="Portfolio"/>
      <Cabecalho/>
      <WrapperProjetos/>

      <Footer/>
    </div>
  )
}
