import React from "react";

import { render, fireEvent, act, waitFor } from '@testing-library/react-native';

import ButtonApp from "../../../src/components/ButtonApp";

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');


describe('ButtonApp', () => {


    it('Botão deve ser pressionado', async () => {
        // const tree = render(<ButtonApp />).toJSON();
     
    const mockOnPress = jest.fn(() => new Promise(resolve => resolve(true)))

        const {
            getByText
        } = render(
            <ButtonApp
                text="Buy"
                onPress={mockOnPress}
                isDisabled={false}
            />
        );


        const botao = getByText("Buy");

        act(() => {
            fireEvent.press(botao);
        })

        expect(mockOnPress).toHaveBeenCalled();




    });

    it('Botão deve ser pressionado quando desabilitado', async () => {
        // const tree = render(<ButtonApp />).toJSON();
        const mockOnPress = jest.fn()

        const {
            getByText
        } = render(
            <ButtonApp
                text="Buy"
                onPress={mockOnPress}
                isDisabled={true}
            />
        );


        const botao = getByText("Buy");

        act(() => {
            fireEvent.press(botao);
        })


        expect(mockOnPress).toHaveBeenCalled();



    });


});