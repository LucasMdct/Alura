import React from "react";
import { Image, StyleSheet, Dimensions, Text } from "react-native";

import top from '../../assets/top.png';

const width = Dimensions.get('screen').width;

function Basket() {
    return <>
    <Image source={top} style={stylebasket.top} />
    <Text style={stylebasket.title}>Basket details</Text>
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
        color:"black",
        fontWeight:"bold",
        padding: 16,
    }
});

export default Basket;
