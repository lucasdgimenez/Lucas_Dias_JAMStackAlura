import React from 'react';
import Cabecalho from '../src/components/Cabecalho';
import Capa from '../src/components/Capa';
import Footer from '../src/components/Footer';
import WrapperProjeos from '../src/components/WrapperProjetos';

export default function Home() {
  return (
    <div style={{
      flex: '1',
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'column',
      justifyContent: 'space-between',
    }}>
      <Capa/>
      <Cabecalho/>
      <WrapperProjeos/>
      <Footer/>
    </div>
  )
}
