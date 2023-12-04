
import React from "react";

import { act, fireEvent, render } from "@testing-library/react-native";

import Botao from "../../../src/componentes/Botao";

describe('Componentes/Botao', () => {
    it('Deve clicar no botao quando habilitado',() => {
        mockBotao = jest.fn();
        const { debug, getByText } = render(<Botao pequeno={true} invertido={true} acao={mockBotao} valor="Clique Aqui" disable={false} />);
        
        const cliqueNoBotao = getByText('Clique Aqui');

       act(() => {
         fireEvent.press(cliqueNoBotao);  
        });
        
        expect(mockBotao).toHaveBeenCalled();

        debug();
        
    });


    it('Não deve clicar no botão quando desabilitado', () => {
        mockBotao = jest.fn();
        const { getByText } = render(<Botao pequeno={false} invertido={false} acao={mockBotao} valor="Clique Aqui" disable={true} />);
        
        const cliqueNoBotao = getByText('Clique Aqui');
      
        act(() => {
          fireEvent.press(cliqueNoBotao);
        });
      
        expect(mockBotao).not.toHaveBeenCalled();
      });   
});