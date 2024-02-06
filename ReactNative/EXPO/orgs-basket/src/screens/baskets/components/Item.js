import React from "react";
import MyText from "../../../components/Text";
import { View, Image, StyleSheet } from "react-native";


export default function Item({ item: { name, img } }) {
    return <View style={StyleItems.liststyle}>
            <Image source={img} style={StyleItems.imge} testID="item-image"></Image>
            <MyText style={StyleItems.name}>{name}</MyText>
        </View>
}

const StyleItems = StyleSheet.create({
    liststyle: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#ececec",
        padding: 16,
        marginHorizontal: 16,
        alignItems: "center",
    },
    imge: {
        width: 46,
        height: 46,
    },
    name: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 11,
        color: "#363636",
    },
});