
import React from 'react';
import { render, fireEvent, waitFor, act } from '@testing-library/react-native';

import { jest, describe, it, expect } from '@jest/globals';

import Star from '../../src/components/Star';
import Stars from "../../src/components/Stars";


describe('src/components/Stars', () => {


    it('renderiza componente e quando o editavel for verdadeiro podemos clicar nas estrelas', async () => {
        const onPressMock = jest.fn();
        const editable = true;
        const initialQuantity = 3; // Defina a quantidade inicial de estrelas
        const { getByTestId } = render(<Stars quantity={initialQuantity} editable={editable} big={undefined} />);


        // Aguarde até que o elemento com accessibilityHint "Star" esteja disponível
        await waitFor(() => {
        fireEvent.press(getByTestId('star-0'));
        onPressMock();
        });

        await act(() => {
            fireEvent.press(getByTestId('star-3'));
            onPressMock();
        });
        
        await waitFor(() => expect(onPressMock).toHaveBeenCalledTimes(2));

    });

});
