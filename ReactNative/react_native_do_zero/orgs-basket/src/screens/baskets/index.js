import React from "react";
import {StyleSheet, View, ScrollView} from "react-native";

import Top from "./components/Top";
import DetailsBasket from "./components/DetailsBasket";
import Items from "./components/Items";


function Basket({top , details, BuyItems}) {
    return <ScrollView>
        <Top {...top}/>
        <View style={stylebasket.basket}>
        <DetailsBasket {...details}/>
        <Items {...BuyItems}/>
        </View>
    </ScrollView>
}

const stylebasket = StyleSheet.create({
    basket: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
});

export default Basket;
