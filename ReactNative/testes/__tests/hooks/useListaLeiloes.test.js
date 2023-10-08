
// importando o hook e as importacoes inicias da biblioteca 
import useListaLeiloes from "../../src/hooks/useListaLeiloes";
import { renderHook, act } from '@testing-library/react-hooks';

// importando o repositorio a funcao de obtemLeiloes
import { obtemLeiloes } from "../../src/repositorio/leilao";


// mockando a funcao de obtem leiloes para simular
jest.mock('../../src/repositorio/leilao');

// criando os objetos que serao simulados o ambiente real

const mockLeiloes = [
    {
        id: 1,
        nome: 'Leilao',
        descricao: 'descricao do leilao',
    }
];

const mockLeiloesAtualizada = [
    {
        id: 1,
        nome: 'Leilao',
        descricao: 'descricao do leilao',
    },

    {
        id: 2,
        nome: 'Leilao',
        descricao: 'descricao do leilao',
    }
];



describe("hooks/useListaLeiloes", () => {
    // iniciando o teste
    it ('deve retornar uma lista de leiloes e uma funcao para atualizar',
    async () => {
        // utilizamos o mock de obtemLeiloes e implementamos nele o objeto mock leiloes
        obtemLeiloes.mockImplementation(() => mockLeiloes);

        // criando uma const que renderiza o hook 
       const { result, waitForNextUpdate } = renderHook(() => useListaLeiloes());

       //esperamos que o result seja igual a um array vazio 
       expect(result.current[0]).toEqual([]);

       // aguardando a proxima atualizacao do hook 
       await waitForNextUpdate();

       // agora esperamos que o result seja igual ao nosso objeto mockLeiloes
       expect(result.current[0]).toEqual(mockLeiloes);

        // implementando novamente a lista atualizada de leiloes no mock obtemleiloes
       obtemLeiloes.mockImplementation(() => mockLeiloesAtualizada);

       // esperamos que o act executa uma segunda funcao retornada pelo hook uselistaleiloes...
       //essa funcao representa a atualizacao da lista de leiloes 
       // isso simula a acaod e atualizar a lista de leiloes 
       await act(() => result.current[1]());

       // POR FIM eu espero que o estado do hook apos a atualizacao e igual a mockleiloesatualziada ou seja 
       // a lista de leiloes foi atualizada corretamente.
       expect(result.current[0]).toEqual(mockLeiloesAtualizada);

    });

});