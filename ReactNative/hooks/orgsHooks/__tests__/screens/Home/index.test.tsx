

import { describe, it, expect} from '@jest/globals';
import { render } from '@testing-library/react-native';

import Home from '../../../src/screens/Home';

describe('src/screens/home', () => {

    it('deve renderizar a tela Home sem erros', () => {

        const { getByText } = render(<Home />); 
        
        const producersElement = getByText('Producers');
        expect(producersElement).toBeTruthy(); 

    });


});