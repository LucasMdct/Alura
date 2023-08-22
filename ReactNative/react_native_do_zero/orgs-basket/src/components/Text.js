import React from "react";
import { Text, StyleSheet } from "react-native";

export default function MyText( {children, style } ) {
    let styleText = stylemytext.teext;

    if(style?.fontWeight === 'bold'){
        styleText = stylemytext.teextBold;
    };
    return <Text style={[style, styleText]}>{ children }</Text>
}

const stylemytext = StyleSheet.create({
    teext: {
      fontFamily: "MontserratRegular",
      fontWeight: "normal",
    },
    teextBold: {
        fontFamily: "MontserratBold",
        fontWeight: "normal",
    },
})