


// imports iniciais 
import { renderHook, act } from '@testing-library/react-hooks';

// importando o hook use leilao
import useLeilao from '../../src/hooks/useLeilao';

// importando os mocks
import { obtemLeilao } from '../../src/repositorio/leilao';
import { adicionaLance, obtemLancesDoLeilao } from '../../src/repositorio/lance';

// importando os estados de lance
import { NAO_ENVIADO, ENVIADO, INVALIDO, MENOR_OU_IGUAL_AOS_LANCES } from '../../src/negocio/constantes/estadosLance';


// criando os mocks dos modulos , e serao usados para controlar o comportamento desses modulos durante os testes.
jest.mock('../../src/repositorio/leilao');
jest.mock('../../src/repositorio/lance');

// criando os objetos que vao ser simulados que representam os dados ficticios de leiloes e lances.
// esses objetos serao usados para configurar os mocks dos modulos .
const mockLeilao = {
  id: 1,
  nome: 'Leilão',
  descricao: 'Descrição do leilão',
  valorInicial: 100,
};

const mockLeilaoAtualizado = {
  id: 1,
  nome: 'Leilão atualizado',
  descricao: 'Descrição do leilão atualizado',
  valorInicial: 100,
};

const mockLancesDoLeilao = [
  {
    id: 1,
    valor: 102,
  }
];

const mockLancesDoLeilaoAtualidado = [
  {
    id: 1,
    valor: 102,
  },
  {
    id: 2,
    valor: 103,
  }
];


// iniciando o teste de hooks/useLeilao
describe('hooks/useLeilao', () => {

    // principal funcao do beforeEach e permitir que voce consigure um estado ou realize tarefas de iniciliazacao
    // comuns a todos os testes dentro de um grupo. tornando o codigo de  teestes mais limpos, organizando e evitando
    // repeticoes desnecessarias.
  beforeEach(() => {
    jest.clearAllMocks(); // voce limpa todos os mocks 
    obtemLeilao.mockReturnValue(mockLeilao);
    obtemLancesDoLeilao.mockReturnValue(mockLancesDoLeilao);
    // configura o comportamento padrao de `obtemLeilao`e `obtemLancesDoLeilao`para retornar os dados 
    // ficticios relevantes. isso garante que essas funcoes retornem os dados desejados durante os testes
  });

  //isto deve
  it('deve retornar o leilão como primeiro parâmetro', async () => {    

    // aqui estamos usando a funcao renderHook para renderizar o hook use leilao 
    const { result, waitForNextUpdate } = renderHook(() => useLeilao()); 
    // result = no caso o result contem a informacoes sobre o resultado da renderizacao do hook, incluindo o estado atual do hook.
    // waitForNextUpdate é uma funcao que permite esperar ate que uma atualizacao no hook seja concluida. isso e especialmente util quando o hook faz parte de alguma operacao assincrona.


    // esta linha faz um assercao (verificacao ) no estado inicial do hook
    // result.current contem o estado atual do hook renderizado, onde `[0]`refere-se ao primeiro valor
    // retornado pelo hook.
    expect(result.current[0]).toEqual({});
    // o expect verifica se o valor inicial do hook é um objeto vazio `{}`.

    await waitForNextUpdate();
    // esta linha aguarda ate que uma atualizacao no hook seja concluida. isso e util quando o hook
    // realiza operacoes assincronas que podem afetar o seu estado.

    // esta linha faz outra assercao apos aguardar a atualizacao do hook.
    // ela verifica se o estado atual do hook, apos a atualizacao e igual ao objeto
    expect(result.current[0]).toEqual({ ...mockLeilao, lances: mockLancesDoLeilao });
    // isso significa que o teste esta verificando se o hook retorna o leilao correto apos algum processamento ou
    // atualizacao.
  });

  it('deve retornar uma função para atualizar como segundo parâmetro', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useLeilao());
    await waitForNextUpdate();
    //Esta linha aguarda até que uma atualização no hook seja concluída, garantindo que você esteja testando o estado após a renderização inicial.

    // aqui voce configura o mock da funcao obtemleilao para retornar mockleilaoatualizado 
    // quando form chamado isso simula o comportamento daf uncao quando ela e chamada
    obtemLeilao.mockReturnValue(mockLeilaoAtualizado);

    // aqui voce configura o mock da funcao obtemlancesdoleilao configurando o para retornar 
    // o mocklancesdoleilaoatualizado 
    obtemLancesDoLeilao.mockReturnValue(mockLancesDoLeilaoAtualidado);


    // aqui voce configura o act para executar a segunda funcao retornada pelo hook useLeilao
    // isso representa a funcao de atualizacao que o hook deve retornar como segundo parametro 
    // ao chamar essa funcao deve esta simulando a acao de atualizar o leilao
    await act(() => result.current[1]());
    expect(result.current[0]).toEqual({ ...mockLeilaoAtualizado, lances: mockLancesDoLeilaoAtualidado });
  });

  describe('[_, _, enviaLance]', () => {

    it('deve enviar um lance caso válido', async () => {
        //nesta linha voce configura o mock da funcao adicionaLance
        // para retornar true , quando for chamado. isso simula o comportamento
        // da funcao quando ela e usada para enviar um lance valido.
      adicionaLance.mockReturnValue(true);


      // mais uma vez renderizando o hook e aguardando ate que uma atualizacao seja concluida
      const { result, waitForNextUpdate } = renderHook(() => useLeilao());
      await waitForNextUpdate();

        // voce declara uma variavel que sera usada para armazenar o status do lance apos a chamada do hook
      let statusLance;

       // aqui voce usa a funcao act para executar a terceira funcao retornada pelo hook useLeilao . esta terceira funcao
       // represetna o envio de um lance -- dentro da act voce atribui o resultado da chamada do hook 
       // que e o status do lance , a variavel (statusLance)este passo simula o envio de um lance valido
      await act(async () => {
        statusLance = await result.current[2]('110');
      });

      // voce verifica se o statusLance e igual a ENVIADO . isso verifica se o hook retornou o status esperado apos o
      //envio bem sucedido do lance 
      expect(statusLance).toEqual(ENVIADO);


      // por fim voce verifica se a funcao adicionaLance , foi chamada com os argumentos corretos, ou seja
      // {leilaoid...} isso garante que a funcao tenha sido chamada com os parametros esperados.
      expect(adicionaLance).toHaveBeenCalledWith({ leilaoId: mockLeilao.id, valor: 110 });
    });

    it('deve rejeitar o lance caso o valor não for numérico', async () => {
        // no caso a mesma coisa das anteriores
      const { result, waitForNextUpdate } = renderHook(() => useLeilao());
      await waitForNextUpdate(); //para aguarda ate que a atualizacao do hook seja concluida
      // para garantir que esteja testando o estado apos a renderizacao inicial

      // cria variavel let statusLance
      let statusLance;

      // faz um await act para executar uma terceira funcao este passo simula o envio de um lance nao numerico
      await act(async () => {
        statusLance = await result.current[2]('a'); // guarda na variavel , um lance com a letra 'a'
      });
      // espera que o status lance seja igual o valor de invalido
      expect(statusLance).toEqual(INVALIDO);

      // espera que o a adicionaLance nao seja chamado se for chamado o teste falahara 
      expect(adicionaLance).not.toHaveBeenCalled();
    });

    it('deve rejeitar o lance caso o valor for menor ou igual a outros lances', async () => {
        // mesmas que as anteriores
      const { result, waitForNextUpdate } = renderHook(() => useLeilao());
      await waitForNextUpdate();
      // aguarde ate que o hook seja renderizado 

      let statusLance; // cria uma let statuslance
      await act(async () => {
        statusLance = await result.current[2]('102'); //aqui setamos o valor 102 para a variavel let
      });

      // esperamos que o statuslance seja igual a variavel menor ou igual aos lances
      expect(statusLance).toEqual(MENOR_OU_IGUAL_AOS_LANCES);

      // e espera que a adicionaLance nao seja chamada se for chamada falhara
      expect(adicionaLance).not.toHaveBeenCalled();
    });

    it('deve rejeitar o lance caso adicionaLance retornar false', async () => {
      adicionaLance.mockReturnValue(false);
      // FAZEMOS UM MOCK que retorna um valor falso

      const { result, waitForNextUpdate } = renderHook(() => useLeilao());
      await waitForNextUpdate();
      // aguardando ate o hook seje renderizado

      let statusLance; // variavel let novamente
      await act(async () => {
        statusLance = await result.current[2]('110'); // SETAMOS UM VALOR A MAIS DO QUE CONTEM NO NOSSO ARRAY
      });

      //esperamos que o lance , seja igual a mensagem de lance nao enviado
      expect(statusLance).toEqual(NAO_ENVIADO);

      // ESPERAMOS que o adicionalance seja chamado e sete o valor no leilao.
      expect(adicionaLance).toHaveBeenCalledWith({ leilaoId: mockLeilao.id, valor: 110 });
    });
  });
});