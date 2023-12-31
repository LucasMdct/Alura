import React from "react";
import MyText from "../../../components/Text";
import { StyleSheet, View, Image, Alert } from "react-native";
import ButtonApp from "../../../components/ButtonApp";

export default function DetailsBasket({ name, logoFarm, nameFarm, description, price, buttonbuy  }) {
    return <>
        <View style={styleBasketDetails.basket} testID="DetailsBasket">
            <MyText style={styleBasketDetails.name}>{name}</MyText>
            <View style={styleBasketDetails.farm}>
                <Image source={logoFarm} style={styleBasketDetails.imageFarm} />
                <MyText style={styleBasketDetails.nameFarm}>{nameFarm}</MyText>
            </View>
            <MyText style={styleBasketDetails.description}>{description}</MyText>
            <MyText style={styleBasketDetails.price}>{price}</MyText>
            <ButtonApp text={buttonbuy} style={styleBasketDetails.buy} onPress={() => {Alert.alert("Comprou a cesta , Obrigado pela preferencia")}} ></ButtonApp>
        </View> 
    </>
}

const styleBasketDetails = StyleSheet.create({
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
    buy: {
        marginTop: 16,
    },
})