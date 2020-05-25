import React from 'react';
import imagem from './assest/img.png';
import Um from './questoes/um';
import Dois from './questoes/dois';
import Tres from './questoes/tres';
import Quatro from './questoes/quatro';
import Cinco from './questoes/cinco';
import Seis from './questoes/seis';
import Sete from './questoes/sete';
import Oito from './questoes/oito';
import Nove from './questoes/nove';
import Dez from './questoes/dez';

function App() {
  return (
    <>
      <img src={imagem} alt="Zumbi!!" />
      <Um />
      <Dois />
      <Tres />
      <Quatro />
      <Cinco />
      <Seis />
      <Sete />
      <Oito />
      <Nove />
      <Dez />
    </>
  );
}

export default App;
