import React from 'react';
import { Text } from 'react-native';
import { render } from '@testing-library/react-native';

import TelaPadrao from '../../../src/componentes/TelaPadrao';

describe('Componentes/TelaPadrao', () => {
    it('Deve telaPadrao corretamente', () => {
        const { getByTestId, getByText } = render(<TelaPadrao><Text testId="filho" >Conteudo da Tela</Text></TelaPadrao>);
        
        // variaveis capturando o que eu quero testar
        const safeAreaViewTop = getByTestId('safeAreaViewTop');
        const keyboardView = getByTestId('keyboardView');
        const children = getByText('Conteudo da Tela');
        const safeAreaViewBottom = getByTestId('safeAreaViewBottom');


        // verificando se de fato ele existe na arvore de renderizacao
        expect(safeAreaViewTop).toBeTruthy();
        expect(keyboardView).toBeTruthy();
        expect(children).toBeTruthy();
        expect(safeAreaViewBottom).toBeTruthy();


    });

   
});