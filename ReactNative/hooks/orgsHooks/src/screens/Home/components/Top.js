import React from "react";
import { Image, Text, View, StyleSheet } from "react-native";

import { loadTop } from "../../../services/loadData";
import logo from '../../../assets/logo.png';

class Top extends React.Component {

    state = {
        top: {
            welcome: '',
            subTitle: '',
        }
    }

    updateTop(){
        const regress = loadTop();
        this.setState({top: regress})
    }

    componentDidMount() {
        this.updateTop();
    }
    render() {
        return <>
            <View style={stylesTop.view}>
                <Image source={logo} style={stylesTop.img}></Image>
                <Text style={stylesTop.welcome}>{this.state.top.welcome}</Text>
                <Text style={stylesTop.subtitle}>{this.state.top.subTitle}</Text>
            </View>
        </>
    }

}

const stylesTop = StyleSheet.create({
    view: {
        backgroundColor: "#F3F3F3",
        padding: 16,
    },
    img: {
        width: 70,
        height: 28,
    },
    welcome: {
        marginTop: 24,
        fontSize: 26,
        lineHeight: 42,
        fontWeight: "bold",
        color: "#464646",
    },
    subtitle: {
        fontSize: 16,
        lineHeight: 26,
        color: "#a3a3a3",
    },

});

export default Top;