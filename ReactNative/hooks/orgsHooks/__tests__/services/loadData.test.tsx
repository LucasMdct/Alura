
import { describe, it, expect } from '@jest/globals';

import { loadProducers, loadTop } from '../../src/services/loadData'; // Certifique-se de ajustar o caminho para corresponder à sua estrutura de diretórios.
import producersMock from '../../src/mocks/producers';
import topMock from '../../src/mocks/top';

describe('src/services/loadData', () => {
    it('loadProducers deve retornar dados de produtores', () => {
        const result = loadProducers();
        expect(result).toEqual(producersMock); // Verifica se os dados correspondem ao mock.
      });

      it('loadTop deve retornar dados do topo', () => {
        const result = loadTop();
        expect(result).toEqual(topMock); // Verifica se os dados correspondem ao mock.
      });
      
});
