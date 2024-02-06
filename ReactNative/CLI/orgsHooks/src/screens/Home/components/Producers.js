import React, {useState, useEffect }from "react";
import { FlatList, StyleSheet, Text } from "react-native";

import useProducers from '../../../hooks/useProducers';

import Producer from "./Producer";

export default function Producers({top: Top}) {
    const [title, list] = useProducers();

    const listTop = () => {
        return <>
        <Top/>
        <Text style={styleProducers.title}>{title}</Text>
        </>

    }

    return <FlatList 
    testID="Flat"
    data={list}
    renderItem={({item}) => <Producer {...item}/>}
    keyExtractor={({name}) => name}
    ListHeaderComponent={listTop}
    />
}

const styleProducers = StyleSheet.create({
    title: {
        fontSize: 20,
        lineHeight: 32,
        marginHorizontal: 16,
        marginTop: 16,
        fontWeight: "bold",
        color: "#464646",
    },
})