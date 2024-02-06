

// importacao das bibliotecas 
import React from 'react';

// isso define um teste usando a funcao `test` do jest. o nome do teste é `mock de um metodo`
test('mock de um método', () => {
    // ja o jest.spyOn é uma funcao que permite criar um "spY"(um tipo de mock) em uma funcao ou metodo
    // especifico. neste caso , voce esta criando um "spy"em ` useEffect `do modulo do `react`
    jest.spyOn(React, 'useEffect').mockImplementation((f) => f());
    // mockImplementation... = esta parte define a implementacao do "spy. Em vez de usar a implementacao real de 
    // `useEffect , voce esta substituindo-a por uma funcao que recebe um funcao `f`como arugumento e a chama imediatamente.

});

//Basicamente, esse código faz com que useEffect seja um mock que não faz nada além de chamar a função passada como argumento 
//assim que for chamado. Isso pode ser util para simular o comportamento de useEffect sem realmente executar nenhum 
//efeito colateral.
/*Lembre-se de que é importante usar mocks com cuidado e só substituir implementações quando necessário para o propósito do teste. Certifique-se de restaurar a implementação original após o teste, especialmente se você estiver modificando comportamentos globais ou funções essenciais para o funcionamento do aplicativo. Você pode fazer isso usando mockRestore() no objeto de "spy".*/




// Snapshot
// import React from 'react';
// import { render } from '@testing-library/react-native';

// import EnviaLance from '../src/telas/Leilao/componentes/EnviaLance';

// describe('Componente.js', () => {
//   it('deve renderizar sem erros', () => {
//     const { toJSON } = render();

//     expect(toJSON()).toMatchSnapshot();
//   });
// });