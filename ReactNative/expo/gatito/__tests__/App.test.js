
import React from "react";
import { render } from "@testing-library/react-native";
import { View } from "react-native";
import Rotas from "../src/Rotas";
import App from '../App';

jest.mock('../src/Rotas');


describe('App',() => {
    it('deve renderizar sem erros', () => {

        Rotas.mockImplementation(() => <View testID="RotasMock" />);

        const { toJSON } = render(<App/>); 
        expect((toJSON())).toMatchSnapshot();
    });
})