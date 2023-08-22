import React from "react";
import { StyleSheet, Image, Dimensions} from "react-native";

import MyText from "../../../components/Text";
import banner from '../../../../assets/banner.png';


const width = Dimensions.get('screen').width;

export default function Top({ title }) {
    return <>
        <Image source={banner} style={stylesbasket_top.bannerstyle} />
        <MyText style={stylesbasket_top.title}>{title}</MyText>

    </>
}

const stylesbasket_top = StyleSheet.create({
    bannerstyle: {
        width: "100%",
        height: 578 / 768 * width,
        
    },
    title: {
        width: "100%",
        position: "absolute",
        textAlign: "center",
        fontSize: 16,
        lineHeight: 26,
        color: "#fff",
        fontWeight: "bold",
        padding: 16,
    },
})