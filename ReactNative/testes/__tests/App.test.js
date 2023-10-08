
//importando as bibliotecas 
import React from 'react';
import { View } from 'react-native';
import { render } from '@testing-library/react-native';

// importando as rotas 
import AppRotas from '../src/rotas/AppRotas';

// importando o app.js
import App from '../App.js';

// mockando o appRotas
jest.mock('../src/rotas/AppRotas.js');


// iniciando o teste do App.js
describe('App.js', () => {
    // isto deve renderizar sem erros
  it('deve renderizar sem erros', () => {
    // chamando o appRotas e implementando o mock nele , utilizando um view e um testId para renderizar a rota
    AppRotas.mockImplementation(() => <View testID="AppRotasMock" />);

    // criando um const toJSON , e renderizando o App NELA
    const { toJSON } = render(<App />);

    // os Snapshots é uma representacao serializada da saida do componente em um determinado momento. isso inclui a estrutura
    // do componente, as propriedades , os estilos e o conteudo renderizado .
    // os snaps sao usados para registar como o componente deve ser renderizado e como ele se parece em um determinado 
    // estado ou cenario , durante o primeiro teste , um snapshot e gerado e salvo em um arquivo. em testes subsequentes, o
    // componente e renderizado novamente e comparado com o snapshot salvo. se eles corresponderem, o teste passa; se nao
    // o teste falha
    expect(toJSON()).toMatchSnapshot();
  });
});