// Servicos.test.js
import React from 'react';
import { render, waitFor } from '@testing-library/react-native';
import Servicos from '../../../src/telas/Servicos';

describe('Servicos', () => {
  it('renderiza a lista de serviços corretamente', async () => {
    const { getByTestId , getByText } = render(<Servicos />);
  
    // Aguarda até que a lista de serviços seja renderizada
    await waitFor(() => {
      getByTestId('lista-servicos');
    });
    
    // verificando se tem os nomes dos itens definido na renderizado 
    expect(getByText('Banho')).toBeDefined();
    expect(getByText('Vacina V4')).toBeDefined();
    expect(getByText('Vacina Antirrábica')).toBeDefined();

  });

});
