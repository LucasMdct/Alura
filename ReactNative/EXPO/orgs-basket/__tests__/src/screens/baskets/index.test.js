
import React from "react";

import { render, waitFor, fireEvent, act } from '@testing-library/react-native';

import basket from "../../../../src/mocks/basket";

import Basket from "../../../../src/screens/baskets";


describe('screens/baskets', () => {



    it('deve renderizar o index da tela baskets sem erros', async () => {

        // Renderize o componente Basket com os dados de exemplo
        const {findByText, getByTestId, queryByText, queryAllByText } = render(<Basket {...basket} />);

        // Use o waitFor para aguardar a renderização completa do componente
        await findByText('Basket of Vegetables');
        await waitFor(() => {            
            
            const basketTextElements = queryAllByText('Basket of Vegetables');
            expect(basketTextElements.length).toBe(2);


            // Verifique se os elementos do componente estão
            const flatList = getByTestId('BasketMock');
            fireEvent(flatList, 'onRefresh');
            expect(flatList.props.data.length).toBeGreaterThan(0);





            expect(flatList).toBeTruthy();
            expect(queryByText('Buy')).toBeTruthy();
            expect(queryByText('Jenny Jack Farm')).toBeTruthy();
            expect(queryByText('a basket with selected products carefully selected from the farm straight to your kitchen.')).toBeTruthy();
            expect(queryByText('U$2,99')).toBeTruthy();
            expect(queryByText('Basket Items')).toBeTruthy();
            expect(queryByText('Tomate', 'Broccoli', 'Pumpkin', 'Potato', 'Cucumber')).toBeTruthy();

        });


    });

});