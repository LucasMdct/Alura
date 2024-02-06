// app.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import App from '../App';
import { criaTabela, buscaNotas, filtraPorCategoria } from '../src/servicos/Notas';

// Mock das funções que são chamadas dentro do componente
jest.mock('../src/servicos/Notas', () => ({
  criaTabela: jest.fn(),
  buscaNotas: jest.fn(() => Promise.resolve([])),
  filtraPorCategoria: jest.fn(() => Promise.resolve([])),
}));

describe('App', () => {
  it('renderiza o componente corretamente', async () => {
    const { debug, getByTestId } = render(<App />);
    // Aqui, você pode fazer asserções para garantir que os elementos desejados estejam presentes na renderização
    debug();
    expect(getByTestId('flatlist')).toBeTruthy();
    expect(getByTestId('picker')).toBeTruthy();
  });

  it('filtra notas corretamente ao selecionar uma categoria', async () => {
    const { debug, getByTestId } = render(<App />);
    const picker = getByTestId('picker');

    fireEvent(picker, 'valueChange', 'Pessoal');

    expect(criaTabela).toHaveBeenCalled();
    expect(buscaNotas).toHaveBeenCalled();
    expect(filtraPorCategoria).toHaveBeenCalledWith('Pessoal');
    debug();
  });

  it('se tiver selecionado todos mostrar todas as notas', async () => {
    // Arrange: Configurar o estado inicial necessário
    const { getByTestId } = render(<App />);

    // Act: Executar a função filtraLista com a categoria "Todos"
    const picker = getByTestId('picker');
    fireEvent(picker, 'valueChange', 'Todos');

    // Aguarde a resolução da Promise antes de fazer as asserções
    await Promise.resolve();

    // Assert: Verificar se a função filtraPorCategoria foi chamada corretamente
    expect(criaTabela).toHaveBeenCalled();
    expect(buscaNotas).toHaveBeenCalled();
    expect(filtraPorCategoria).toHaveBeenCalledWith('Todos');
  });

});
