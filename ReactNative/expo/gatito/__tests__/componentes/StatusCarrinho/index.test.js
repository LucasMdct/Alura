import React from "react";

import {fireEvent, render} from '@testing-library/react-native';

import StatusCarrinho from "../../../src/componentes/StatusCarrinho";

describe('Componentes/StatusCarrinho', () => {

    it('deve renderizar o componente e clicar no botao de concluir pedido quando estiver habilitado', () => {

        const mockBotao = jest.fn();

        const { getByText } = render(<StatusCarrinho total={3000.00} dis={false} onPress={mockBotao} />);

        const carrinho = getByText('Total do Carrinho:');

        const valorFormatado = Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format('3000.00');



        const reais = getByText(valorFormatado);

        const botao = getByText('Concluir Pedido');

        fireEvent.press(botao);

        expect(mockBotao).toHaveBeenCalled();
        expect(carrinho).toBeTruthy();
        expect(reais).toBeTruthy();


    });

    it('nao deve clicar no botao quando ele estiver desabilitado', () => {

        const mockBotao = jest.fn();

        const { getByText } = render(<StatusCarrinho total={19000.00} dis={true} onPress={mockBotao} />);

        const carrinho = getByText('Total do Carrinho:');

        const valorFormatado = Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format('19000.00');



        const reais = getByText(valorFormatado);

        const botao = getByText('Concluir Pedido');

        fireEvent.press(botao);

        expect(mockBotao).not.toHaveBeenCalled();
        expect(carrinho).toBeTruthy();
        expect(reais).toBeTruthy();

    });


});