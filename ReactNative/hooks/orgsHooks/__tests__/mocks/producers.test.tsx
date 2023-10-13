
// importando producers mock
import producers from "../../src/mocks/producers";

// importando jest
import { describe, it, expect} from '@jest/globals';


// comecando teste de mock producers
describe ('src/mocks/producers',() => {

        // testando o titulo que verifica (toBe) se a expressão dentro dela é verdadeira. 
        it('deve ter um título "Producers"', () => {
            expect(producers.title).toBe('Producers');
            //Neste caso, estamos verificando se producers.title é igual a 'Producers'.
          });

        // este teste verifica se o objeto `producers` possui uma lista de produtores. 
        // Primeiro , usamos `Array.isArray(producers.list)`para verificar se `producers.list` 
        it('deve conter uma lista de produtores', () => {
            expect(Array.isArray(producers.list)).toBe(true);
            expect(producers.list.length).toBeGreaterThan(0);
            // é um array. em Seguida usamos a funcao acima expect , para verificar o tamanho da lista
            // com producers.list.length e utilizamos o toBeGreaterThan (para verificar se o comprimento)
            // da lista e maior que zero, ou seja, se ela contem pelo menos um produtor.
          });
        
          
          //este teste verifica se cada produtor na lista possui propriedades validas , como nome , imagem ,distancia e classificacao. usamos um loop `forEach`para iterar sobre cada produtor na lista e, em seguida , usamos várias afirmacoes
          // `expect` para verificar as propriedades de cada produtor
          it('cada produtor deve ter um nome, uma imagem, uma distância e uma classificação válida', () => {
            producers.list.forEach((produtor) => {
                // verificamos se o nome do produtor é um valor definido (toBeDefined)
              expect(produtor.name).toBeDefined(); 
               // verificamos se a imagem do pordutor esta definida (toBeDefined)
              expect(produtor.img_producers).toBeDefined();
               // verificamos se a distancia do produtor e um numero de fato , com a funcao (toBe)
              expect(typeof produtor.distance).toBe('number');
              // verificamos se a distancia esta dentro dos limites com afuncao (toBeGreaterThanOrEqual(1))
              // que significa serMaiorOuIgual a o numero 1
              expect(produtor.distance).toBeGreaterThanOrEqual(1);
              // verificamos se a distancia esta dentro dos limistes com a funcao (toBeLessThanOrEqual(500))
              // que significa serMenorOuIgual a o numero 500
              expect(produtor.distance).toBeLessThanOrEqual(500);
              // novamente verificando o tipo , se a classificacao do produtor de fato [toBe] é numero
              expect(typeof produtor.stars).toBe('number');
              // verificamos se a classificacao esta dentro dos limites (toBeGreaterThanOrEqual(1)) 
              // que significa serMaiorOuIgual a o numero 1
              expect(produtor.stars).toBeGreaterThanOrEqual(1);
                // verificamos se a classificacao esta dentro dos limites (toBeLessThanOrEqual(5))
              // que significa serMenorOuIgual a o numero 5
              expect(produtor.stars).toBeLessThanOrEqual(5);
            });

        });


});