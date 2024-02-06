

/****** PARTE DE IMPORTACAO - ESTUDANDO O CODIGO EM SI ******/

import React from 'react';  // importando react 
import { View } from 'react-native';
import { render } from '@testing-library/react-native';  // importando render para testar da library test do react native

import AppRotas from '../../src/rotas/AppRotas';
import ListaLeiloes from '../../src/telas/ListaLeiloes';  // chamando a tela de lista de leileos pois iremos testar a rota do app
import Leilao from '../../src/telas/Leilao';  // chamando a tela de leilao , pois  iremos testar a rota do app


// Mockando (simulando) os componentes 'ListaLeiloes' e 'Leilao' para os testes
jest.mock('../../src/telas/ListaLeiloes');
jest.mock('../../src/telas/Leilao');
/* Mocka (simula) o componente ListaLeiloes e Leilao para os testes. Isso significa que, em vez de usar a implementação real do componente, o teste usará uma versão simulada. INTERESSANTE !*/

/**************************************************************************************************************/

describe('rotas/appRotas', () => {
    /*
    describe('rotas/appRotas', () => { ... });: Esta parte define um bloco de testes chamado "rotas/appRotas". Isso é usado para agrupar testes relacionados.
    */


    it('deve renderizar sem erros', () => {
        /******************************************************************/
        /* it('deve renderizar sem erros', () => { ... });: Dentro do bloco de testes, 
        você está definindo um teste específico com a descrição "deve renderizar sem erros". 
        Isso descreve o que este teste deve fazer. */
        /******************************************************************/


        ListaLeiloes.mockImplementation(() => <View testID="ListaLeiloes" />);
        /* ListaLeiloes.mockImplementation(() => <View testID="ListaLeiloes" />);: 
        Você está mockando (simulando) o componente ListaLeiloes para que ele retorne um componente simples de View com um atributo testID. Isso é feito para evitar interações reais com o componente durante o teste.*/
        /******************************************************************/



        Leilao.mockImplementation(() => <View testID="Leilao" />);

        /*Leilao.mockImplementation(() => <View testID="Leilao" />);: 
        Você está fazendo o mesmo para o componente Leilao, mockando-o para que retorne um componente View com um atributo testID.*/



        /******************************************************************/
        const { toJSON } = render(<AppRotas />);
        /* const { toJSON } = render(<AppRotas />);: 
        Aqui você está usando a função render para renderizar o componente AppRotas. 
        O resultado da renderização é armazenado em uma variável toJSON.*/


        /******************************************************************/

        expect(toJSON()).toMatchSnapshot();
        /* expect(toJSON()).toMatchSnapshot();: 
        Você está usando a função expect para comparar o JSON gerado 
        pelo componente AppRotas com um snapshot previamente salvo. 
        Isso verifica se o componente está sendo renderizado conforme o esperado.*/

        /******************************************************************/

        /* Em resumo, este teste verifica se o componente AppRotas pode ser renderizado sem erros 
        e se sua saída corresponde a um snapshot previamente salvo. Os componentes ListaLeiloes e 
        Leilao são simulados para evitar interações reais durante o teste. Isso é útil para testar 
        a integração de rotas e componentes em seu aplicativo. */
    });

});
