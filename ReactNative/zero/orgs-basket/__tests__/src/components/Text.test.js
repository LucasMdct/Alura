import React from "react";

import {render} from '@testing-library/react-native';

import MyText from "../../../src/components/Text";


describe('Componente de Texto', () => {

    it('Deve renderizar o componente texto sem erros',() => {
        const { getByText} = render(<MyText>Texto Sendo Testado</MyText>);


        const textoNoComponente = getByText('Texto Sendo Testado');

        expect(textoNoComponente).toBeTruthy();



    });

});