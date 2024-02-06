import React from 'react';
import { render } from '@testing-library/react-native';

import imagem from '../../../../../assets/fruits/Pumpkin.png'
import Item from '../../../../../src/screens/baskets/components/Item.js';

// Mock dos dados para o item
const itemData = {
  name: "Pumpkin",
  img: imagem, // Você pode ajustar o caminho do arquivo de imagem conforme necessário
};


describe('src/screens/baskets/components/item', () => {

    it('deve renderizar o componente item', () => {
        const { getByText, getByTestId } = render(<Item item={itemData} />);

        // Verifique se o nome do item é exibido corretamente
        const itemNameElement = getByText("Pumpkin");
        expect(itemNameElement).toBeTruthy();

        // Verifique se a imagem do item é exibida corretamente
        const itemImageElement = getByTestId("item-image");
        expect(itemImageElement).toBeTruthy();
        expect(itemImageElement.props.source).toEqual(itemData.img); // Verifique se a fonte da imagem está correta
    });

});


