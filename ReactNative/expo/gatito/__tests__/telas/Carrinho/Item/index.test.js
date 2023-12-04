import React from "react";
import { render, waitFor, fireEvent, act } from '@testing-library/react-native';

import Item from "../../../../src/telas/Carrinho/Item";



const mockItens = [
    {
        id: 1,
        nome: 'Item de Exemplo',
        preco: 230.0,
        descricao: 'Descricao do item',
        },
    {
        id: 2,
        nome: 'Produto One',
        descricao: 'Seu único serviço de beleza para deixar você bonito para as festas de final de ano',
        preco: 25899.99,
    },
    {
        id: 3,
        nome: 'Produto Two',
        descricao: 'Seu único de seguro de carros',
        preco: 1500.00,
    }
];

jest.mock("react-native/Libraries/Alert/Alert", () => ({
    alert: jest.fn(),
}));

describe('Carrinho', () => {

    it('atualiza quantidade e total corretamente e clica no botao de adicionar ao carrinho', async () => {
        for (const item of mockItens) {

            const { getByText, getByTestId } = render(<Item {...item} />);

            // PRESSIONANDO O CARD PARA PODER INTERAGIR COM O BOTAO 
            fireEvent.press(getByText(item.nome));

            // Quantidade de itens/produtos
            const quantidadeInput = getByTestId('campoInteiro');
            fireEvent.changeText(quantidadeInput, '10');

            // esperamos que contenha a quantidade que foi setada
            expect(quantidadeInput.props.value).toBe('10');
            // verificando se contém de fato a formatacao R$ e se o valor total é o esperado.
            const valorEsperado = (item.preco * quantidadeInput.props.value).toFixed(2);

            const valorEsperadoFormatado = Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
            }).format(valorEsperado);

            const valorFinalEsperado = getByText(valorEsperadoFormatado, { exact: false })?.props.children;

            expect(valorFinalEsperado).toBeTruthy();


            // AGORA COM CARD ABERTO e o Quantidade Escolhida Clique no botao de add no carrinho
            const ButtonTest = getByText('Remover do Carrinho');

            // PRESSIONANDO O BOTAO COM ACT ENVOLVENDO  
            act(() => {
                fireEvent.press(ButtonTest);
            });

            // Aguarda a execução de eventos assíncronos (Alert.alert)
            await waitFor(() => {
                // Verifica se o Alert.alert foi chamado com a mensagem esperada
                expect(require("react-native/Libraries/Alert/Alert").alert).toHaveBeenCalledWith(
                    'Gatito', 'Produto removido com sucesso. '
                );
            });
        }
    });

});
