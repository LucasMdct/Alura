import React from "react";
import {StyleSheet, View} from "react-native";

import Top from "./components/Top";
import DetailsBasket from "./components/DetailsBasket";

function Basket({top , details}) {
    return <>
        <Top {...top}/>
        <View style={stylebasket.basket}>
        <DetailsBasket {...details}/>
        </View>
    </>
}

const stylebasket = StyleSheet.create({
    basket: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
});

export default Basket;
