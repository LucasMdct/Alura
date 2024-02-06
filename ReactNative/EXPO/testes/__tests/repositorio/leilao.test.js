import { obtemLeiloes, obtemLeilao } from "../../src/repositorio/leilao";
import apiLeiloes from '../../src/servicos/apiLeiloes';

jest.mock('../../src/servicos/apiLeiloes');
const id = 1; // Defina um ID válido para o teste

const mockLeiloes = [
    {
        id: id,
        nome: 'leilao',
        descricao: 'descricao do leilao',
    }
];

const mockRequisicao = (retorno) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                data: retorno,
            });
        }, 200);
    });
};

const mockRequisicaoErro = () => {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject();
        }, 200);
    });
};

describe("repositorio/leilao", () => {

    beforeEach(() => {
        apiLeiloes.get.mockClear();
    });

    describe("obtemLeiloes", () => {

        it('deve retornar uma lista de leiloes ', async () => {
            apiLeiloes.get.mockImplementation(() => mockRequisicao(mockLeiloes));

            const leiloes = await obtemLeiloes();

            // console.log(leiloes);

            expect(leiloes).toEqual(mockLeiloes);

            expect(apiLeiloes.get).toHaveBeenCalledWith('/leiloes');
            expect(apiLeiloes.get).toHaveBeenCalledTimes(1);

        });


        it('deve retornar uma lista vazia quando a requisicao falhar ', async () => {
            apiLeiloes.get.mockImplementation(() => mockRequisicaoErro());

            const leiloes = await obtemLeiloes();

            // console.log(leiloes);

            expect(leiloes).toEqual([]);

            expect(apiLeiloes.get).toHaveBeenCalledWith('/leiloes');
            expect(apiLeiloes.get).toHaveBeenCalledTimes(1);

        });



    });


    describe("obtemLeilao", () => {

        it('deve retornar um leilao por id ', async () => {
             // Configura o retorno da função mock de apiLeiloes.get
            apiLeiloes.get.mockResolvedValue({ data: mockLeiloes });

            // Chama a função obtemLeilao com o ID
            const leilao = await obtemLeilao(id);

            // Verifica se a função apiLeiloes.get foi chamada com o argumento correto
            expect(apiLeiloes.get).toHaveBeenCalledWith(`/leiloes/${id}`);

            // Verifica se o resultado da função é o leilão esperado
            expect(leilao).toEqual(mockLeiloes);

        });


        it('deve retornar um objeto vazio quando a requisição falhar', async () => {
            const id = 1; // Defina um ID válido para o teste
    
            // Configura o mock de apiLeiloes.get para rejeitar a promessa
            apiLeiloes.get.mockRejectedValue(new Error('Erro na requisição'));
    
            // Chama a função obtemLeilao com o ID
            const leilao = await obtemLeilao(id);
    
            // Verifica se a função apiLeiloes.get foi chamada com o argumento correto
            expect(apiLeiloes.get).toHaveBeenCalledWith(`/leiloes/${id}`);
    
            // Verifica se o resultado da função é um objeto vazio
            expect(leilao).toEqual({});
        });

    });

});