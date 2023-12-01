import React from "react";
import { render } from "@testing-library/react-native";
import { View } from 'react-native';
import Rotas from '../src/Rotas';

import Servicos from "../src/telas/Servicos";
import Carrinho from "../src/telas/Carrinho";

jest.mock('../src/telas/Servicos');
jest.mock('../src/telas/Carrinho');

describe('Rotas', () => {
    it('Deve renderizar as rotas', () => {
        // Configuração do mock de navegação
        Servicos.mockImplementation(() => <View testID="Servicos" />);

        Carrinho.mockImplementation(() => <View testID="Carrinho" />);

        const { toJSON  } = render(<Rotas />);

        expect(toJSON()).toMatchSnapshot();

    });
});