import React from 'react';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import Rotas from './src/Rotas';
import TelaPadrao from './src/componentes/TelaPadrao';


export default function App() {
 //Reactotron.log('Alura');
  return (
  <TelaPadrao>
     <Rotas />
     </TelaPadrao>
  );
}