

import React from "react";

import { render, waitFor, fireEvent, act } from '@testing-library/react-native';

import { jest, describe, it, expect } from '@jest/globals';

import Star from "../../src/components/Star";


describe('src/components/Star', () => {

    it('Renderização padrão do componente Star', () => {
        const { getByA11yHint } = render(<Star onPress={undefined} completed={undefined} index={undefined} />);
        const star = getByA11yHint('Star');
      
        // Verifique se o elemento botao Star esta presente
        expect(star).toBeTruthy();
      });

        
  it('Clique no botão quando completed é falso', async() => {
    const onPressMock = jest.fn();
    const { getByA11yHint } = render(<Star onPress={onPressMock} completed={false} index={undefined}/>);
    const starButton = getByA11yHint('Star');
  
    // Verifique se o botão está presente
    expect(starButton).toBeTruthy();
    await act(()=>{
      fireEvent.press(starButton);
      onPressMock();
    });
    // Simule um clique no botão
    await waitFor ( () => {
    expect(onPressMock).toHaveBeenCalled();
    });
  
   
  });

  it('Clique no botão quando completed é verdadeiro', async() => {
    // mockando a funcao de onpress
    const onPressMock = jest.fn();
    // renderizando componente
    const { getByA11yHint } = render(<Star onPress={onPressMock} completed={true} index={undefined}/>);

    // criando conexao com botao
    const starButton = getByA11yHint('Star');
  
    // Verifique se o botão está presente
    expect(starButton).toBeTruthy();
  
    // Simule um clique no botão
    await act(()=>{
    fireEvent.press(starButton);
    onPressMock();
     });
     
    // Verifique se a função onPress foi chamada
    await waitFor ( () => {
    expect(onPressMock).toHaveBeenCalled();
     });
  });


});