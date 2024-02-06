

// imports e mocks iniciais...
import React from 'react';
import { act, render, fireEvent, waitFor } from '@testing-library/react-native';
import { Text, TouchableWithoutFeedback } from 'react-native';

import Leilao from '../../../src/telas/Leilao';
import Topo from '../../../src/telas/Leilao/componentes/Topo';
import Lance from '../../../src/telas/Leilao/componentes/Lance';
import EnviaLance from '../../../src/telas/Leilao/componentes/EnviaLance';

import useLeilao from '../../../src/hooks/useLeilao';
//*************************************************************************/


// configuracoes de mocks e espionagem de funcoes.
const mockObteLeilao = jest.fn();
const mockEnviarLance = jest.fn(() => ({ valido: true }));

jest.mock('../../../src/hooks/useLeilao', () => jest.fn(() => ([
    {
        id: 1,
        nome: 'Leilão de teste',
        lances: [
            {
                id: 1,
                valor: 1200,
            },
            {
                id: 2,
                valor: 1300,
            },
        ]
    },
    mockObteLeilao,
    mockEnviarLance,
])));

jest.mock('../../../src/telas/Leilao/componentes/Topo');
jest.mock('../../../src/telas/Leilao/componentes/Lance');
jest.mock('../../../src/telas/Leilao/componentes/EnviaLance');

jest.mock('@react-navigation/native', () => ({
    useRoute: jest.fn().mockReturnValue({
        params: {
            id: 1,
        },
    }),
}));

/*****************************************************************/
/*
        Nesta parte, voce esta configurando mocks e espionando funcoes para simular o comportamento 
        de algumas partes do codigo. 

        * - `mockObteLeilao` e `mockEnviarLance` sao mocks de funcoes que serao usados posteriormente para
        verificar se essas funcoes foram chamadas.

        * - o `useLeilao` e mockado para retornar valores ficticios que simulam os resultados reais do hook.
        isso permite testar o comportamento do componente 'Leilao' sem a necessidade de um ambiente real.

        * - os componentes `Topo`, `Lance` e `EnviaLance` sao mockados para substituir os componentes reais durante
        os testes.

        * - `@react-navigation/native` e mockado para simular o uso de `useRoute` , que é comum em navegacao com
        REACT NAVIGATION.


*/
/*****************************************************************/
// Configuração Inicial dos Componentes Mockados

describe('telas/Leilao', () => {
    const [leilao, obtemLeilao, enviaLance] = useLeilao();

    beforeAll(() => {
        Topo.mockImplementation(({ nome }) => <Text>Topo: {nome}</Text>);
        Lance.mockImplementation(({ valor }) => <Text>Lance: {valor}</Text>);
        EnviaLance.mockImplementation(({ enviaLance }) => <TouchableWithoutFeedback onPress={enviaLance}>
            <Text>Enviar Lance</Text>
        </TouchableWithoutFeedback>); // esta funcao e um componente do react native que permite criar areas clicaveis em um 
        // aplicativo sem nenhuma aparencia visual , especifica para o componente.
    });

    // a funcao `beforeAll` e usada para configurar a implementacao dos componentes mockados ( `Topo ` , `Lance`, `enviaLance`)
    // antes da execucao dos testes , isso garante que esses componentes sejam substituidos por versoes simuladas durantes os testes.

    beforeEach(() => {
        jest.clearAllMocks();
    });

    // esta funcao ,beforeEach serve para ser usada para limpar todos os mocks antes de cada teste. 

    it('deve renderizar mostrando o componente de Leilao', () => {
        const { getByText } = render(<Leilao />);

        // este teste verifica se o componente leilao e renderizado corretamente. ele usa `render` para renderizar 
        // em seguida ele verifica se alguns elementos do texto esperados estao presentes nessa tela.
        expect(getByText('Topo: Leilão de teste')).toBeTruthy();  // se existe o componente topo e se e verdadeiro.
        expect(getByText('Lance: 1200')).toBeTruthy();  // se existe o lance e se e verdadeiro.
        expect(getByText('Lance: 1300')).toBeTruthy();  // se existe o lance e se e verdadeiro.

        // AQUI ELE VAI VERIFICAR SE AS FUNCOES `obtemLeilao`e `enviaLance` nao foram chamdadas 

        expect(obtemLeilao).not.toHaveBeenCalled(); // VERIFICA SE A FUNCAO OBTEMLEILAO NAO FOI CHAMADA
        expect(enviaLance).not.toHaveBeenCalled();  // VERIFICA SE A FUNCAO ENVIALANCE NAO FOI CHAMADA
    });

    // teste 2 , atualizar o leilao  
    it('deve atualizar o leilao quando a flatlist recarregar', () => {

        // esta funcao ele renderiza a tela leilao e desconstruimos com getByTestId
        const { getByTestId } = render(<Leilao />);

        const flatList = getByTestId('lista-lances');
        // aqui a gente pucha o id da flatlist da funcao leilao 

        act(() => {  // essa funcao vai simular a interecao do usuario com a lista, como se o usuario estivesse
            // puchando a lista para baixo e atualizando ela.
            flatList.props.onRefresh();
        });

        expect(mockObteLeilao).toHaveBeenCalledTimes(1); // isso verifica se a funcao mockObteLeilao foi chamada
        // exatamente uma vez durante a execucao de teste. Se ela foi chamada mais ou menos do que uma vez , o teste falhará.
        expect(mockEnviarLance).not.toHaveBeenCalled();
        // isso verifica se a funcao chamada `mockEnviarLance` NAO FOI chamada durante a execucao do teste. se essa funcao for
        //chamada o teste falhara.
    });

    // envio lance e recarregamento da tela do leilao 
    it('deve chamar enviaLance quando o lance for enviado e recarregar o leilão', async () => {

        const { getByText } = render(<Leilao />);
        // renderizar o componente Leilao em um ambiente de teste. 
        // permite selecionar elementos na árvore de renderização para interagir com eles durante o teste.
        


        // esta linha simula uma interecao do usuario. Ele pressiona um elemento cujo texto é Enviar lance. isso 
        // simula o evento de pressionar um botao ou acionar a funcao ` enviaLance` no seu componente.
        fireEvent.press(getByText('Enviar Lance'));


        //espere que o (mock) seja chamado apenas uma vez durante a execusao do testes.
        expect(mockEnviarLance).toHaveBeenCalledTimes(1);


        // espere que o (mock) nao seja chamado durante o processo de testes se for chamado falhará.
        expect(mockObteLeilao).not.toHaveBeenCalled();

        // depois fazemos um await para esperar por alguma condicao no teste antes de continuar , no caso
        // voce esta aguardando que a funcao (mock) seja chamada uma vez.
        // isso e importante porque muitos aplicativos no mudno real  a recarga do leilao pode ser uma operacao assincrona
        // que leva algum tempo para ser concluida. portanto voce espera ate que a funcao seja chamada antes de prosseguir com mais
        // verificacoes.
        await waitFor(() => {
            expect(mockObteLeilao).toHaveBeenCalledTimes(1);
        });
    });

    //testes 4 - lidando com leilao em carregamento
    it('não deve crashar quando o leilão estiver estiver carregando', async () => {

        useLeilao.mockImplementation(() => ([[]]));
            // aqui estamos substituindo a implementacao da funcao useLeilao com uma mock(simulacao)
            // que retorna uma matriz vazia . isso simula a situacao em que o hook useLeilao retorna um array vazio
            // indicando que o leilao esta em um estado de carregamento , sem dados disponiveis.


        const { getByTestId } = render(<Leilao />);
        // usamos a  funcao `render` para renderizar o componente Leilao.
 
        expect(() => getByTestId('lista-lances')).toThrow();
        // esta linha de codigo , verifica se uma excecao (erro) e lancada quando tentamos buscar um elemento com
        //atributo `data-testid igual a lista-lances. o objetivo aqui e verificar se o componente Leilao nao esta quebrando
        // quando esta em um estado de carregamento e nao ha elementos com o teste de identificacao lista-lances.


    });
});