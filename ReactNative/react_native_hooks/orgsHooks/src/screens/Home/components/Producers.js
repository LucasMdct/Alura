import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text } from "react-native";

import { loadProducers } from "../../../services/loadData";
import Producer from "./Producer";

export default function Producers({top: Top}) {
    const [title, setTitle] = useState('');
    const [list, setList] = useState('');

    useEffect(() => {
        const regress = loadProducers();
        setTitle(regress.title);
        setList(regress.list);
        //console.log(regress);
    }, []);

    const listTop = () => {
        return <>
        <Top/>
        <Text style={styleProducers.title}>{title}</Text>
        </>

    }

    return <FlatList 
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