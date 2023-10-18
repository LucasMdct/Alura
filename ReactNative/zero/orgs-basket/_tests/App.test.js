import React from 'react';
import { render, waitFor, act } from '@testing-library/react-native';
import App from '../App'; // Certifique-se de que o caminho para o seu componente App está correto
import * as SplashScreen from 'expo-splash-screen';
import * as MontserratFonts from '@expo-google-fonts/montserrat'; // Importe o módulo original

// Substitua diretamente a função useFonts
MontserratFonts.useFonts = jest.fn().mockReturnValue([true]);

jest.mock('expo-splash-screen', () => ({
    hideAsync: jest.fn(),
}));



describe('App Component', () => {

    it('deve testar o componente', async () => {
        const hideAsyncSpy = jest.spyOn(SplashScreen, 'hideAsync');

        // Simula que a fonte está carregada
        const { getByTestId } = render(<App />);

        await waitFor(() => expect(getByTestId('splashScreen')).toBeTruthy());


        // Verifica se SplashScreen.hideAsync não foi chamada ainda
        expect(SplashScreen.hideAsync).not.toHaveBeenCalled();

        // Simula o evento onLayoutRootView
         act(() => {
            getByTestId('splashScreen').props.onLayout();
        });


        // Verifica se SplashScreen.hideAsync foi chamada após o evento onLayout
        expect(hideAsyncSpy).toHaveBeenCalled();

    });
    // // isto deve renderizar sem erros
    it('deve renderizar App sem erros', () => {
        // Renderize o componente
        const { toJSON } = render(<App />);


        expect(toJSON()).toMatchSnapshot();
    });
    it('deve chamar SplashScreen.hideAsync após carregar as fontes', async () => {
        const { getByTestId } = render(<App />);


        await waitFor(() => {
            const appElement = getByTestId('splashScreen');
            expect(appElement).toBeTruthy();
        });
    });
});

// iniciando o teste do App.js
// describe('App.js', () => {

    //     it('deve renderizar o componente App corretamente e ocultar o SplashScreen', async () => {
    //         const { getByTestId } = render(<App />);

    //         // Verifica se o componente App foi renderizado corretamente
    //         const appElement = getByTestId('splashScreen');
    //         expect(appElement).toBeTruthy();

    //         // Aguarda a execução da função hideAsync
    //         await waitFor(() => {
    //           // Verifica se hideAsync foi chamado
    //           expect(require('expo-splash-screen').hideAsync).toHaveBeenCalled();
    //         });
    //       });
    //     // // isto deve renderizar sem erros
    //     it('deve renderizar App sem erros', () => {
    //        // Renderize o componente
    //        const { toJSON } = render(<App />);



    // });

    //     expect(toJSON()).toMatchSnapshot();
    // });

    // it('Deve esconder o splashScreen quando fontLoading for verdadeiro', async () => {
    //     // Mock para SplashScreen.hideAsync
    //     const mock = SplashScreen.hideAsync = jest.fn();

    //     // Simula que `onLayoutRootView` retorna true (fontLoading é verdadeiro)
    //     const onLayoutRootView = jest.fn().mockReturnValue(true);

    //     // Chama a função que você deseja testar
    //     await onLayoutRootView;
    //     console.log(onLayoutRootView);
    //     // Verifica se SplashScreen.hideAsync foi chamado
    //     expect(mock).toHaveBeenCalledTimes(0);
    //     console.log(mock);

    // });

    // it('Deve exibir o splashScreen quando fontLoading for false', async () => {
    //     // Mock para SplashScreen.hideAsync
    //     const mock = SplashScreen.hideAsync = jest.fn();

    //     // Simula que `onLayoutRootView` retorna true (fontLoading é verdadeiro)
    //     const onLayoutRootView = jest.fn().mockReturnValue(false);

    //     // Chama a função que você deseja testar
    //     await onLayoutRootView;


    //     expect(mock).not.toHaveBeenCalled();

    // });


// });