import React from "react";
import { fireEvent, render } from '@testing-library/react-native';

import CampoInteiro from "../../../src/componentes/CampoInteiro";

describe('Componentes/CampoInteiro', () => {
    it('Deve atualizar o valor corretamente', () => {
        const mockInput = jest.fn();
        const { getByTestId} = render(<CampoInteiro valor={200} acao={mockInput} />);

        const pegarInput = getByTestId('campoInteiro');

        fireEvent.changeText(pegarInput, '500');

        expect(mockInput).toHaveBeenCalledWith('500');
        
    });

    it('Nao deve atualizar valor nao inteiro', () => {
        const mockInput = jest.fn();

        const {getByTestId} = render(<CampoInteiro valor={200} acao={mockInput} />);

        const pegarInput = getByTestId('campoInteiro');

        fireEvent.changeText(pegarInput, 'abc');

        expect(mockInput).not.toHaveBeenCalled();

    });

});