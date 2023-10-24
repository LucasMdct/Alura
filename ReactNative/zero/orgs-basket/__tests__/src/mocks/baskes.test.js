

import basket from "../../../src/mocks/basket";
import logo from '../../../assets/logo-farm.png';


describe('src/mocks/basket', () => {

    it('deve renderizar e comparar os textos', () => {

        // Verifique as propriedades e valores esperados no objeto basket

        // Verifique se a propriedade 'title' existe e é igual a "Basket of Vegetables"
        expect(basket.top.title).toBe("Basket of Vegetables");

        
        // verifica se a propriedade de detaiils.'name' existe , se existe compara com o texto abaixo

        expect(basket.details.name).toBe("Basket of Vegetables");

        // Verfique se a propriedade logoFarm existe e e igual a "logo" que esta sendo importado
        // diretamento nos imports desse arquivo
        expect(basket.details.logoFarm).toBe(logo);


        //verifica se a propriedade basket details description existe e se e igual ao texto abaixo
        expect(basket.details.description).toBe("a basket with selected products carefully selected from the farm straight to your kitchen.");


        // Verifique se a propriedade 'nameFarm' existe e é igual a "Jenny Jack Farm"
        expect(basket.details.nameFarm).toBe("Jenny Jack Farm");


          // Verifique se a propriedade 'buttonbuy' existe e é igual a "Buy"
          expect(basket.details.buttonbuy).toBe("Buy");



        // Verifique se a propriedade 'price' existe e é igual a "U$2,99"
        expect(basket.details.price).toBe("U$2,99");

        expect(basket.BuyItems.title).toBe("Basket Items");
        // Verifique se a propriedade 'list' do objeto 'BuyItems' tem o tamanho esperado 
        expect(basket.BuyItems.list).toHaveLength(5);



    });



});