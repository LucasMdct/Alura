import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import Top from "./components/Top";
import DetailsBasket from "./components/DetailsBasket";
import Item from "./components/Item";
import MyText from "../../components/Text";


export default function Basket({ top, details, BuyItems }) {
    return <>
        <FlatList
            testID="BasketMock"
            data={BuyItems.list}
            renderItem={Item}
            keyExtractor={({ name }) => name }
            ListHeaderComponent={() => {
                return <>
                    <Top {...top} />
                    <View style={stylebasket.basket}>
                        <DetailsBasket {...details} />
                        <MyText style={stylebasket.title}>{BuyItems.title}</MyText>
                    </View>
                </>
            }} />
            </>
}

const stylebasket = StyleSheet.create({
    title: {
        color: "#464646",
        fontWeight: "bold",
        marginTop: 32,
        marginBottom: 8,
        fontSize: 20,
        lineHeight: 32,
    },
    basket: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
});
