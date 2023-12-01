import React from "react";

import {render , waitFor, act} from '@testing-library/react-native';

import Carrinho from "../../../src/telas/Carrinho";

describe('Carrinho', () => {
        it('Deve renderizar sem erros', () => {
            const { debug } = render(<Carrinho />);

            //debug();

        });
});