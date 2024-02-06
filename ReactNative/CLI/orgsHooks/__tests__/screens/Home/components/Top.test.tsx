import { jest, describe, it, expect} from '@jest/globals';
import { loadTop } from "../../../../src/services/loadData";
import Top from "../../../../src/screens/Home/components/Top";
import { render } from '@testing-library/react-native';

// Você também pode mockear a função loadTop, caso necessário
jest.mock('../../../../src/services/loadData', () => ({
    loadTop: jest.fn(() => ({
      welcome: 'Bem Vindo ao teste',
      subTitle: 'Isto é um subtitulo de um Teste',
    })),
  }));

  describe('src/screens/home/components/Top', () => {

    it('deve renderizar corretamente', () => {
        const { getByText } = render(<Top />);
        
        
        // verifica se os elementos sao renderizados corretamente 
         getByText('Bem Vindo ao teste');
         getByText('Isto é um subtitulo de um Teste');

      


    });


  });