import React from "react";

import { render, fireEvent } from "@testing-library/react-native";
import { useNavigation } from "@react-navigation/native";

import Leilao from "../../../../src/telas/ListaLeiloes/componentes/Leilao";

jest.mock('@react-navigation/native', () => ({
    useNavigation: jest.fn().mockReturnValue({
        navigate: jest.fn(),
    }),
}));

jest.mock('../../../../src/negocio/formatadores/moeda.js', () => ({
    formataDecimalParaReal: jest.fn((valor) => valor),
}));

describe('telas/ListaLeiloes/componentes/Leilao', ()=>{
    const navigation = useNavigation();

    const leilao = {
        id: 1,
        nome: 'Leilao de teste',
        valorInicial: 1000,
    };

    beforeEach(() => {
        navigation.navigate.mockClear();
    });

    it('deve renderizar mostrando as informacoes de nome e valor ', () => {
        const { getByText } = render(<Leilao {...leilao} />);

        expect(getByText('Leilao de teste')).toBeTruthy();
        expect(getByText('1000')).toBeTruthy();

    });

    it('deve chamar o metodo de navagecao para a tela de detalhes do leilao', () => {
        const { getByText } = render(<Leilao {...leilao}/>);

        fireEvent.press(getByText('Leilao de teste'));

        expect(navigation.navigate).toHaveBeenCalledTimes(1);
        expect(navigation.navigate).toHaveBeenCalledWith('Leilao', {id: 1});
    });

});