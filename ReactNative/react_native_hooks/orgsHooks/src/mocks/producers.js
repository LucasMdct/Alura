
import green from '../assets/produtores/green.png';
import grow from '../assets/produtores/grow.png';
import jenny_jack from '../assets/produtores/jenny-jack.png';
import potager from '../assets/produtores/potager.png';
import salad from '../assets/produtores/salad.png';


const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const producers = {
    title: "Producers",
    list: [{
        name: "Green",
        img_producers: green,
        distance: generateRandomNumber(1, 500),
        stars: generateRandomNumber(1, 5),
    },
    {
        name: "Grow",
        img_producers: grow,
        distance: generateRandomNumber(1, 500),
        stars: generateRandomNumber(1, 5),
    },
    {
        name: "Jenny Jack",
        img_producers: jenny_jack,
        distance: generateRandomNumber(1, 500),
        stars: generateRandomNumber(1, 5),
    },
    {
        name: "Potager",
        img_producers: potager,
        distance: generateRandomNumber(1, 500),
        stars: generateRandomNumber(1, 5),
    },
    {
        name: "salad",
        img_producers: salad,
        distance: generateRandomNumber(1, 500),
        stars: generateRandomNumber(1, 5),
    },
    ]
}

export default producers;