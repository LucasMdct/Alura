import React from "react";
import { render, waitFor, fireEvent, act } from '@testing-library/react-native';

import Item from "../../../../src/telas/Servicos/Item";

const mockItem = {
  id: 1,
  nome: 'Item de Exemplo',
  preco: 230.0,
  descricao: 'Descricao do item',
};

jest.mock("react-native/Libraries/Alert/Alert", () => ({
  alert: jest.fn(),
}));


describe('Item Component', () => {
  
  afterEach(() => {
    jest.clearAllMocks();
  });
  
  it('renderiza componente', async () => {
    const { findByText, getByText } = render(<Item {...mockItem} />);

    await waitFor(() => {
      expect(findByText(mockItem.nome)).toBeTruthy();
      expect(findByText(mockItem.descricao)).toBeTruthy();
      expect(findByText(/R\$ 230,00/)).toBeTruthy();
    });

    expect(getByText(mockItem.nome)).toBeTruthy();
    expect(getByText(mockItem.descricao)).toBeTruthy();

    expect(getByText(new RegExp(`R\\$\\s*${mockItem.preco.toFixed(2)}`))).toBeTruthy();


  });
  it('expande e contrai corretamente', async () => {
    const { getByText, queryByText } = render(<Item {...mockItem} />);

    fireEvent.press(getByText(mockItem.nome));

    expect(queryByText('Quantidade:')).toBeTruthy();
    expect(queryByText('Total:')).toBeTruthy();

    fireEvent.press(getByText(mockItem.nome));

    expect(queryByText('Quantidade:')).toBeNull();
    expect(queryByText('Total:')).toBeNull();


  });

  it('atualiza quantidade e total corretamente e clica no botao de adicionar ao carrinho', async () => {
    const { getByText, getByTestId } = render(<Item {...mockItem} />);

    // PRESSIONANDO O CARD PARA PODER INTERAGIR COM O BOTAO 
    fireEvent.press(getByText(mockItem.nome));

    // Quantidade de itens/produtos
    const quantidadeInput = getByTestId('campoInteiro');
    fireEvent.changeText(quantidadeInput, '10');

    // esperamos que contenha a quantidade que foi setada
    expect(quantidadeInput.props.value).toBe('10');
    // verificando se contém de fato a formatacao R$ e se o valor total é o esperado.
    const valorEsperado = (mockItem.preco * quantidadeInput.props.value).toFixed(2);

    const valorEsperadoFormatado = Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(valorEsperado);

    const valorFinalEsperado = getByText(valorEsperadoFormatado, { exact: false })?.props.children;

    expect(valorFinalEsperado).toBeTruthy();


    // AGORA COM CARD ABERTO e o Quantidade Escolhida Clique no botao de add no carrinho
    const ButtonTest = getByText('Adicionar ao Carrinho');

    // PRESSIONANDO O BOTAO COM ACT ENVOLVENDO  
    act(() => {
      fireEvent.press(ButtonTest);
    });

    // Aguarda a execução de eventos assíncronos (Alert.alert)
    await waitFor(() => {
      // Verifica se o Alert.alert foi chamado com a mensagem esperada
      expect(require("react-native/Libraries/Alert/Alert").alert).toHaveBeenCalledWith(
        "Produto adicionado com sucesso", `Foi adicionado ${quantidadeInput.props.value}, Total de : ${(mockItem.preco * quantidadeInput.props.value).toFixed(2)}`
      );
    });

  });

});