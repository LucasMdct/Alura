import React from "react";

import { render } from '@testing-library/react-native';

import banner from '../../../../../assets/banner.png';
import Top from "../../../../../src/screens/baskets/components/Top";


describe('src/screens/baskets/components/Top', () => {

    it('deve renderizar o componente Top sem erros', () => {

        // QUANDO NAO TEMOS UM OBJETO DENTRO DE UMA FUNCAO 
        // UTILIZAMOS UMA CONSTANTE BASICA PARA DEFINIR A PROPS DA FUNCAO CERTO
        // AI QUANDO TEMOS UM OBJETO PRECISAMOS CRIAR UM ARRAY MOCHANDO O ITEM , E PASSANDO
        // ELE COMO ITEM...

        const title = "Basket of Vegetables";
        

        const { getByText, getByTestId } = render(<Top title={title} />);

        const topElementText = getByText("Basket of Vegetables");
        expect(topElementText).toBeTruthy();


        // Verifique se a imagem do item é exibida corretamente
        const ImageElement = getByTestId("top-image");
        expect(ImageElement).toBeTruthy();
        expect(ImageElement.props.source).toEqual(banner); // Verifique se a fonte da imagem está correta

    });

});