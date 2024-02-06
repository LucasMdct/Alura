import top from "../../src/mocks/top";

import { describe, it, expect} from '@jest/globals';

describe ('src/mocks/top',() => {
    it('o mock top deve retornar dados esperados',() => {
        expect(top).toEqual({
            welcome: "Hello Customer",
            subTitle: "Find the best producers",
        });
    });
});