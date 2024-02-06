
// IMPORTANDO 
import React from 'react';
import { act, render } from '@testing-library/react-native';
import { Text } from 'react-native';

// IMPORTANDO A LISTA DE LEILAO E O COMPONENTE LEILAO DA LISTA DE LEILAO
import ListaLeiloes from '../../../src/telas/ListaLeiloes';
import Leilao from '../../../src/telas/ListaLeiloes/componentes/Leilao';

// IMPORTANDO O HOOK USELISTALEILOES
import useListaLeiloes from '../../../src/hooks/useListaLeiloes';

// FAZENDO UM MOCK DE UM OBJETO , VAZIO CREIO EU
const mockObtemLeiloes = jest.fn();

// ESPECIFICANDO COMO E O OBJETO DESSE MOCK 
jest.mock('../../../src/hooks/useListaLeiloes', () => jest.fn(() => ([
  [
    {
      id: 1,
      nome: 'Leilão de teste',
    },
    {
      id: 2,
      nome: 'Leilão de teste 2',
    },
  ], // VINCULANDO O MOCK, A VARIAVEL 
  mockObtemLeiloes,
])));

// MOCHANDO O COMPONENTE DE LEILAO
jest.mock('../../../src/telas/ListaLeiloes/componentes/Leilao');

describe('telas/ListaLeiloes', () => {
    // UTILIZANDO DUAS VARIAVEIS DA USE LISTA LEILOES
  const [ leiloes, obtemLeiloes ] = useListaLeiloes();

  // nao sei oque faz 
  beforeEach(() => {
    mockObtemLeiloes.mockClear();
    // aqui ser que e para limpar o mock
  });

  it('deve renderizar mostrando o componente de Leilao', () => {
    // mock implementattion , para renderizar um leilao 
    Leilao.mockImplementation(({ nome }) => <Text>Teste: { nome }</Text>);

    // renderizando a lista de leiloes 
    const { getByText } = render(<ListaLeiloes />);

    // esperando que tenha na tela e se de fato é verdadeiro 
    expect(getByText('Teste: Leilão de teste')).toBeTruthy();
    expect(getByText('Teste: Leilão de teste 2')).toBeTruthy();

    //nao esta esperando a chamada de obtemleiloes , se tiver uma chamada o teste falhara 
    expect(obtemLeiloes).not.toHaveBeenCalled();
  });

  it('deve atualizar a lista quando a flatlist recarregar', () => {

    // mockando o componente leilao e implementando algo nele 
    Leilao.mockImplementation(({ nome }) => <Text>{ nome }</Text>);

    // renderizando a lista de leiloes 
    const { getByTestId } = render(<ListaLeiloes />);
    
    // criando uma flatlist , que condiz com o id da verdadeira flatlist
    const flatList = getByTestId('lista-leiloes');


    //chamando a funcao act para atualizarmos as props da flatlist
    act(() => {
      flatList.props.onRefresh();
    });


    // e esperamos obter o mockobtemleiloes , com uma chamada apenas.
    expect(mockObtemLeiloes).toHaveBeenCalledTimes(1); 
  });
});