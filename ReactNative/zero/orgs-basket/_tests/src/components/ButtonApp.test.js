import React from "react";

import { render, fireEvent, act, waitFor } from '@testing-library/react-native';

import ButtonApp from "../../../src/components/ButtonApp";

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');


describe('ButtonApp', () => {


    it('Botão deve ser pressionado', async () => {
        // const tree = render(<ButtonApp />).toJSON();
        const mockOnPress = jest.fn();

        const {
            getByA11yHint
        } = render(
            <ButtonApp
                text="Comprar"
                onPress={mockOnPress}
                isDisabled={false}
            />
        );


        const botao = getByA11yHint("Buy");

        act(() => {
            fireEvent.press(botao);
        })

        await waitFor(() => {
            expect(mockOnPress).toHaveBeenCalled();
        })



    });

    it('Botão deve ser pressionado quando desabilitado', async () => {
        // const tree = render(<ButtonApp />).toJSON();
        const mockOnPress = jest.fn();

        const {
            getByA11yHint
        } = render(
            <ButtonApp
                text="Comprar"
                onPress={mockOnPress}
                isDisabled={true}
            />
        );


        const botao = getByA11yHint("Buy");

        act(() => {
            fireEvent.press(botao);
        })

        await waitFor(() => {
            expect(mockOnPress).not.toHaveBeenCalled();
        })



    });

 
});