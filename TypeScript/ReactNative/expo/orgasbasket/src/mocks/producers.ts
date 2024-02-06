import { InterfaceProducers } from './interfaces/Interface-producers';
//              PRODUCERS
//////////////////////////////////////////////////
import green from '../assets/producers/green.png';
import salad from '../assets/producers/salad.png';
import jennyJack from '../assets/producers/jenny-jack.png';
import grow from '../assets/producers/grow.png';
import potager from '../assets/producers/potager.png';

///////////////////////////////////////////////////////////
//            VEGETABLES
import asparagus from '../assets/vegetables/Asparagus.png';
import tomato from '../assets/vegetables/Tomato.png';
import broccoli from '../assets/vegetables/Broccoli.png';
import potato from '../assets/vegetables/Potato.png';
import cucumber from '../assets/vegetables/Cucumber.png';
import pumpkin from '../assets/vegetables/Pumpkin.png';
import carrots from '../assets/vegetables/Carrots.png';
import carrots2 from '../assets/vegetables/Carrots2.png';
import vegetables from '../assets/vegetables/Vegetables.png';

const mathRondom = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}


const producers: InterfaceProducers = {
  list: [
    {
      name: "Green",
      image: green,
      distance: mathRondom(1, 500),
      stars: mathRondom(1, 5),
      baskets: [
        {
          details: {
            name: "Broccoli and Cucumber",
            description: "One basket of products selected",
            price: "R$ 40,00",
            image: cucumber
          },
          itens: [
            {
              name: "Broccoli",
              image: broccoli,
            },
            {
              name: "Cucumber",
              image:  cucumber,
            },
          ]
        },
        {
          details: {
            name: "Broccoli",
            description: "One basket of products selected",
            price: "R$ 40.00",
            image: broccoli,
          },
          itens: [
            {
              name: "Brocooli",
              image: broccoli,
            }
          ]
        },
      ]
    }
  ]
}


export default producers;
