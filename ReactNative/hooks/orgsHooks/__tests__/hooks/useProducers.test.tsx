 
import { waitFor } from '@testing-library/react-native';
 import { renderHook } from '@testing-library/react-hooks';

import { jest, describe, it, expect } from '@jest/globals';

import useProducers from '../../src/hooks/useProducers';


jest.mock('../../src/services/loadData', () => ({
    loadProducers: jest.fn(() => ({
      title: 'Productores',
      list: [
        {name: 'Produtor 1', distance: 10, stars: 3},
        {name: 'Produtor 2',distance: 5, stars: 5},
        {name: 'Produtor 3',distance: 10, stars: 4},
      ],
    })),
  }));


describe('src/hooks/useProducers', () => {


    it('deve retornar o título e a lista de produtores', async () => {    
        const {result} = renderHook(() => useProducers());

        await waitFor(() => {
            expect(result.current[0]).toBe('Productores');  
            expect(result.current[1]).toEqual([
          {name: 'Produtor 2', distance: 5, stars: 5},
          {name: 'Produtor 3', distance: 10, stars: 4},
          {name: 'Produtor 1', distance: 10, stars: 3},
        ]);
        });
      
    });

});
