import React, { useState } from "react";
import { Image, TouchableOpacity, StyleSheet, Text, View } from "react-native";
import Stars from "../../../components/Stars";

export default function Producer({ name, img_producers, distance, stars }) {
    const [select, setSelect] = useState(false);
    
    return <TouchableOpacity
        onPress={() => setSelect(!select)}
        style={styleProducer.card}>
        <Image source={img_producers} accessibilityLabel={name} style={styleProducer.img} />
        <View style={styleProducer.about}>
            <View>
                <Text style={styleProducer.name}>{name}</Text>
                <Stars
                    editable={select}
                    big={select} 
                    quantity={stars} />
            </View>
            <Text style={styleProducer.distance}>{distance}</Text>
        </View>
    </TouchableOpacity>
}

const styleProducer = StyleSheet.create({
    card: {
        backgroundColor: '#f6f6f6',
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 6,
        flexDirection: 'row',

        // IOS SHADOW ////////
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        // ANDROID SHADOW ///////
        elevation: 4,
    },
    img: {
        width: 48,
        height: 48,
        borderRadius: 6,
        marginVertical: 16,
        marginLeft: 16,
    },
    about: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 8,
        marginVertical: 16,
        marginRight: 16,
    },
    name: {
        fontSize: 14,
        lineHeight: 22,
        fontWeight: 'bold',
    },
    distance: {
        fontSize: 12,
        lineHeight: 19,
    },

});