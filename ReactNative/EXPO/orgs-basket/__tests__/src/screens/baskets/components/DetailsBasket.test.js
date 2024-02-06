

import React from "react";
import logo from '../../../../../assets/logo-farm.png';
import {fireEvent, render, waitFor, act} from '@testing-library/react-native';

import DetailsBasket from "../../../../../src/screens/baskets/components/DetailsBasket";


jest.mock("react-native/Libraries/Alert/Alert", () => ({
    alert: jest.fn(),
  }));

  const props = {
    name: "Nome da Cesta",
    logoFarm: logo, // Substitua pelo caminho correto
    nameFarm: "Nome da Fazenda",
    description: "Descrição da Cesta",
    price: "$19.99",
    buttonbuy: "Buy",
  };

describe('src/screens/baskets/components/DetailsBasket', () => {

it('deve renderizar o componente item', async() => {
    const { getByText, debug } = render(<DetailsBasket {...props} />);
  
    debug();

    // Verifica se o botão "Comprar" está presente
    const buyButton = getByText("Buy");

    // Simula a ação de pressionar o botão de compra
    act( ( ) => {
        fireEvent.press(buyButton);

    });

    // Aguarda a execução de eventos assíncronos (Alert.alert)
    await waitFor(() => {
      // Verifica se o Alert.alert foi chamado com a mensagem esperada
      expect(require("react-native/Libraries/Alert/Alert").alert).toHaveBeenCalledWith(
        "Comprou a cesta , Obrigado pela preferencia"
      );
    });



});

});
