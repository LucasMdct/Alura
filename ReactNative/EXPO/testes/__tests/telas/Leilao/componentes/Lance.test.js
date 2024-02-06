import React from 'react';
import { render, getByTestId } from '@testing-library/react-native';
import Lance from '../../../../src/telas/Leilao/componentes/Lance';

   const mockProps = {
      id: 1,
      valor: 50.0,
      cor: 'blue',
    };
    
describe('Lance Component', () => {
  it('renders correctly', () => {
 

    const { getByTestId, getByText, debug} = render(<Lance {...mockProps} />);

    const lanceComponent = getByTestId('lance-component');
    expect(lanceComponent).toBeTruthy();

    const iconElement = getByTestId('hand-paper-icon-container');
    expect(iconElement).toBeTruthy();

    const identificadorText = getByText('#1');
    expect(identificadorText).toBeTruthy();

    const valorText = getByText('R$ 50,00');
    expect(valorText).toBeTruthy();
    console.log(debug());
  });
});
