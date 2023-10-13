/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';
import { render, waitFor } from '@testing-library/react-native';

// Note: import explicitly to use the types shiped with jest.
import {describe, it, expect} from '@jest/globals';


describe('renderizar o componente App', () => {
    it('deve renderizar sem erros', async () => {
      const {getByTestId, toJSON} = render(<App />);

      const pegarTela = getByTestId('App');

      await waitFor( () => {
        expect(pegarTela).toBeTruthy();
      });

      expect(toJSON()).toMatchSnapshot();
    });

});
// it('renders correctly', () => {
//   renderer.create(<App />);
// });