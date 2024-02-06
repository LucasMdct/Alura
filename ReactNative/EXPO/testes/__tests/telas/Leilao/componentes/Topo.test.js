import React from 'react';
import { render } from '@testing-library/react-native';
import Topo from '../../../../src/telas/Leilao/componentes/Topo';


 const mockProps = {
      nome: 'Nome do Item',
      descricao: 'Descrição do Item',
      lances: [/* array de lances mockados */],
      valorInicial: 100.0,
      cor: 'red',
      icone: undefined,
    };

describe('Topo Component', () => {
  it('renders correctly', () => {
   

    const { getByText } = render(<Topo {...mockProps} />);

    expect(getByText('Nome do Item')).toBeTruthy();
    expect(getByText('Descrição do Item')).toBeTruthy();
    expect(getByText('Melhor Lance')).toBeTruthy();
    expect(getByText('Valor Inicial')).toBeTruthy();
  });
});
