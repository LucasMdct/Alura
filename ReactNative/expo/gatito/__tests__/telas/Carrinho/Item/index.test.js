import React from "react";

import { render, waitFor, act } from '@testing-library/react-native';

import Item from "../../../../src/telas/Carrinho/Item";


const mockItem = [
    {
        id: 1,
        nome: 'Item de Exemplo',
        preco: 230.0,
        descricao: 'Descricao do item',
    },
    {
        id: 2,
        nome: 'Produto One',
        descricao: 'Seu unico servico de beleza para deixar voce bonito para as festas de final de ano',
        preco: 25899.99,
    }, 
    {
        id: 3,
        nome: 'Produto Two',
        descricao: 'Seu unico de seguro de carros',
        preco: 1500.00,
    }
];

describe('Carrinho', () => {
    it('Deve renderizar sem erros', async() => {
        const { findByText, debug } = render(<Item {...mockItem} />);

        await waitFor(() => {
            expect(findByText(mockItem.nome)).toBeTruthy();
            expect(findByText(mockItem.descricao)).toBeTruthy();
          });


       //debug();
    });
});