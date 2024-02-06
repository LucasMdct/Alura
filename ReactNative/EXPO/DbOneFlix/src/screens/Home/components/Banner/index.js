import React from "react";
import { Image, Text, View, StyleSheet } from "react-native";

import img from '../../../../assets/Banner.png';

 const Banner = () => {
    return (
            <Image source={img} style={stylesTop.img} />
    )
}

const stylesTop = StyleSheet.create({
    img: {
        width: '100%',
        height: 138,
        flexShrink: 0,
    },

});

export default Banner;