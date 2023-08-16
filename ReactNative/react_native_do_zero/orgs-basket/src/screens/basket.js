import React from "react";
import { Image, StyleSheet, Dimensions, Text, View } from "react-native";

import top from '../../assets/top.png';
import logo from '../../assets/logo-farm.png';

const width = Dimensions.get('screen').width;

function Basket() {
    return <>
        <Image source={top} style={stylebasket.top} />
        <Text style={stylebasket.title}>Basket details</Text>

        <View style={stylebasket.basket}>
            <Text style={stylebasket.name}>Basket of Vegetables</Text>
            <View style={stylebasket.farm}>
                <Image source={logo} style={stylebasket.imageFarm}/>
                <Text style={stylebasket.nameFarm}>Jenny Jack Farm</Text>
            </View>
            <Text style={stylebasket.description}>a basket with selected products carefully selected from the farm straight to your kitchen.</Text>
            <Text style={stylebasket.price}>U$10.00</Text>
        </View>
    </>
}

const stylebasket = StyleSheet.create({
    top: {
        width: "100%",
        height: 578 / 768 * width,
        
    },
    title: {
        width: "100%",
        position: "absolute",
        textAlign: "center",
        fontSize: 16,
        lineHeight: 26,
        color: "black",
        fontWeight: "bold",
        padding: 16,
    },
    basket: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    name: {
        fontSize: 26,
        lineHeight: 42,
        color: "#464646",
        fontFamily: "MontserratBold",
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
        fontFamily: "MontserratRegular",
    },
    description: {
        color: "#A3A3A3",
        fontSize: 16,
        lineHeight: 26,
    },
    price: {
        color: "#2A9F85",
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8,
    },

});

export default Basket;
