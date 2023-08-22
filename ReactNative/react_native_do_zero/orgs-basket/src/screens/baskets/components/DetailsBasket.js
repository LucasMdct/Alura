import React from "react";
import MyText from "../../../components/Text";
import logo from '../../../../assets/logo-farm.png';
import { StyleSheet,View, Image } from "react-native";

export default function DetailsBasket() {
    return <>
    <View style={styleBasketDetails.basket}>
        <MyText style={styleBasketDetails.name}>Basket of Vegetables</MyText>
        <View style={styleBasketDetails.farm}>
            <Image source={logo} style={styleBasketDetails.imageFarm} />
            <MyText style={styleBasketDetails.nameFarm}>Jenny Jack Farm</MyText>
        </View>
        <MyText style={styleBasketDetails.description}>a basket with selected products carefully selected from the farm straight to your kitchen.</MyText>
        <MyText style={styleBasketDetails.price}>U$10.00</MyText>
    </View>
    </>
}

const styleBasketDetails = StyleSheet.create({
    basket: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    name: {
        fontSize: 29,
        lineHeight: 42,
        color: "#464646",
        fontWeight: "bold",
    },
    farm: {
        flexDirection: "row",
        paddingVertical: 12,

    },
    imageFarm: {
        width: 32,
        height: 32,
    },
    nameFarm: {
        marginLeft: 12,
        fontSize: 16,
        lineHeight: 26,
    },
    description: {
        color: "#A3A3A3",
        fontSize: 16,
        lineHeight: 26,
    },
    price: {
        color: "#2A9F85",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8,
        fontWeight: "bold",

    },
})