
import Producer from "../../../../src/screens/Home/components/Producer";
import { fireEvent, render, waitFor } from '@testing-library/react-native';
import { jest, describe, it, expect } from '@jest/globals';



describe('src/screens/Home/components/Producer', () => {

    it('deve testar componente producer', () => {
        const { getByText, getByTestId } = render(<Producer
            name="John Doe"
            img_producers={require('../../../../src/assets/produtores/green.png')} // Substitua pelo caminho da imagem correta
            distance={300}
            stars={3}
        />);

        // Verifica se os elementos são renderizados corretamente
        const nameText = getByText('John Doe');
        const distanceText = getByText('300m');
        const starRating = getByTestId('star-3'); // pegando a terceira estrela 

        fireEvent.press(starRating);

        expect(nameText).toBeTruthy();
        expect(distanceText).toBeTruthy();
        expect(starRating).toBeTruthy();

    });

    it('deve alternar a seleção ao pressionar', async () => {
        const producer = {
            name: 'Produtor 1',
            img_producers: require('../../../../src/assets/produtores/green.png'),
            distance: 100,
            stars: 3,
        };

        const { getByTestId } = render(<Producer {...producer} />);


        const card = getByTestId('Card');
     
        expect(card).toBeTruthy();

        expect(card).toBeDefined();
        fireEvent.press(card);
        expect(card).toBeDefined();
  
     // Verifique se o estado de seleção foi alternado para verdadeiro
      expect(card.props.style).toHaveProperty('backgroundColor', "#f6f6f6");
  


    });


});