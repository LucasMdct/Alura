import React from "react";

import { render, fireEvent, waitFor } from '@testing-library/react-native';

import ButtonApp from "../../../src/components/ButtonApp";

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');


describe('ButtonApp', () => {

    it('Botão deve ser renderizado corretamente', async () => {
        // const tree = render(<ButtonApp />).toJSON();
        const enviaButton = jest.fn(() => new Promise(resolve => resolve(Boolean)));

        const {
            getByA11yHint
        } = render(
            <ButtonApp
                onPress={enviaButton}
            />
        );


        const botao = getByA11yHint("Buy");

        fireEvent.press(botao);

        expect(botao).toBeTruthy();



    });

    // it ('Deve chamar onpress quando botao e pressionado ', () => {
    //     const onPress = jest.fn();

    //     const {getAllByA11yHint} = render(<ButtonApp />);

    //     const botao = getAllByA11yHint('Buy');


    //     fireEvent.press(botao);




    //     expect(onPress).toHaveBeenCalled();

    // })
});