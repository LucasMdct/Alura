
import React from "react";
import { Text, SafeAreaView, StatusBar, FlatList } from "react-native";
import Item from "./item";

const servicos = [
    {
        id: 1,
        nome: 'Banho',
        preco: 79.9,
        descricao: "NAO DE BANHO NO SEU GATO ! Mas se precisar nos damos."
    },
    {
        id: 2,
        nome: 'Vacina v4',
        preco: 89.9,
        descricao: "Uma dose da vacina V4. seu Gato precisa de duas."
    },
    {
        id: 3,
        nome: 'Vacina Antirrabica',
        preco: 666.66,
        descricao: "Uma dose da vacina antirrábica. seu gato precisa de seis."
    }
];

export default function Services() {

    return <SafeAreaView>
        <StatusBar />
        <Text>Tela de servicos</Text>
        <FlatList 
        data={servicos} 
        removeClippedSubviews={false}
        renderItem={({item}) => <Item {...item}/>}
        keyExtractor={({id}) => String(id)}
        />
    </SafeAreaView>
}