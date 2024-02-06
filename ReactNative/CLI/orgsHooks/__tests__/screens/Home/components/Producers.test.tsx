
import { fireEvent, render, waitFor, act } from '@testing-library/react-native';
import { jest, describe, it, expect } from '@jest/globals';
import { loadTop, loadProducers } from '../../../../src/services/loadData'; // Importe o módulo inteiro onde a função loadTop está definida

import Producers from "../../../../src/screens/Home/components/Producers";
import Top from '../../../../src/screens/Home/components/Top';



describe('src/screens/Home/components/Producers', () => {

    it('deve renderizar o componente sem erros', async () => {

        const { getByText, getByTestId } = render(<Producers top={Top} />);

        const titleText = getByText('Hello Customer');
        expect(titleText).toBeTruthy();

        // Verifique se os itens de produtor estão presentes
        const find = getByText('Find the best producers');
        const producers = getByText('Producers');
        expect(find).toBeTruthy();
        expect(producers).toBeTruthy();


        // Use waitFor para aguardar até que o ScrollView seja renderizado
        await waitFor(() => {
            const flatList = getByTestId('Flat');
            expect(flatList).toBeDefined();

        });



    });

});