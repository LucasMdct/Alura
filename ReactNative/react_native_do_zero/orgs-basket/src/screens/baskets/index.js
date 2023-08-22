import React from "react";
import {StyleSheet,} from "react-native";

import Top from "./components/Top";
import DetailsBasket from "./components/DetailsBasket";

function Basket() {
    return <>
        <Top/>
        <DetailsBasket></DetailsBasket>
    </>
}

const stylebasket = StyleSheet.create({

});

export default Basket;
