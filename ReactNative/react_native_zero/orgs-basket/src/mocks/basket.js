import logo from '../../assets/logo-farm.png';
import Tomato from '../../assets/fruits/Tomato.png';
import Broccoli from '../../assets/fruits/Broccoli.png';
import Cucumber from '../../assets/fruits/Cucumber.png';
import Potato from '../../assets/fruits/Potato.png';
import Pumpkin from '../../assets/fruits/Pumpkin.png';

const basket = {
    top: {
        title: "Basket of Vegetables",
    },
    details: {
        name: "Basket of Vegetables",
        logoFarm: logo,
        nameFarm: "Jenny Jack Farm",
        description: "a basket with selected products carefully selected from the farm straight to your kitchen.",
        price: "U$2,99",
        buttonbuy: "Buy",
    },
    BuyItems: {
        title: "Basket Items",
        list: [
            {
                name: "Tomate",
                img: Tomato,
            },
            {
                name: "Broccoli",
                img: Broccoli,
            },
            {
                name: "Pumpkin",
                img: Pumpkin,
            },
            {
                name: "Potato",
                img: Potato,
            },
            {
                name: "Cucumber",
                img: Cucumber,
            },
        ]
    },


}

export default basket;