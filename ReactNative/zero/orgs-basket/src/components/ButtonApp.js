import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import MyText from "./Text";

export default function ButtonApp({ text, onPress, style, isDisabled}){

    return <TouchableOpacity style={[styleButtonApp.button, style]} onPress={onPress} disabled={false} >
        <MyText style={styleButtonApp.textButton}>{text}</MyText>
    </TouchableOpacity> 
}

const styleButtonApp = StyleSheet.create({
  button: {
    backgroundColor: "#2A9000",
    paddingVertical: 16,
    borderRadius: 6,
  },
  textButton:{
    textAlign: "center",
    color: "#fff",
    fontSize: 19,
    lineHeight: 26,
    fontWeight: "bold",
  },
});