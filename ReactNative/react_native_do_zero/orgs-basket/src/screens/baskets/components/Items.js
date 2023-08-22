import React from "react";
import MyText from "../../../components/Text";
import { View, Image, StyleSheet } from "react-native";


export default function Items({ title, list }) {


    return <>
        <MyText style={StyleItems.title}>{title}</MyText>
        {list.map(({ name, img }) => {
            return <View key={name} style={StyleItems.liststyle}>
                <Image  source={img} style={StyleItems.imge}></Image>
                 <MyText style={StyleItems.name}>{name}</MyText>
            </View>
        })}
    </>
}

const StyleItems = StyleSheet.create({
    title: {
        color: "#464646",
        fontWeight: "bold",
        marginTop: 32,
        marginBottom: 8,
        fontSize: 20,
        lineHeight: 32,
    },
    liststyle : {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#ececec",
        paddingVertical: 16,
        alignItems: "center",
    },
    imge : {
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