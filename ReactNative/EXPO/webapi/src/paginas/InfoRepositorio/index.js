import React, { useState } from 'react';
import { Text, View, TouchableOpacity, TextInput, Alert } from 'react-native';
import estilos from './estilos';

import { salvarRepo, deletarRepoUser} from '../../servicos/requisicoes/repo';

export default function InfoRepositorio({ route, navigation }) {
    const [nome, setNome] = useState(route.params.item.name);
    const [data, setData] = useState(route.params.item.data);
    
    async function salvar() {
        const resultado = await salvarRepo(
            route.params.item.postId,
            nome,
            data,
            route.params.item.id,
        )
        if( resultado === 'sucesso') {
            Alert.alert("Repositorio atualizado !")
            navigation.goBack();
        }else {
            Alert.alert("Erro ao atualizar repositorio")
        }
    }



    async function deletar() {
        const resultado = await deletarRepoUser(route.params.item.id)
        
        if( resultado === 'sucesso'){
            Alert.alert('Repositorio Deletado !')
            navigation.goBack();
        }else {
            Alert.alert('Erro')
        }

    }

    return (
        <View style={estilos.container}>
            <TextInput
                placeholder="Nome do repositório"
                autoCapitalize="none"
                style={estilos.entrada}
                value={nome}
                onChangeText={setNome}
            />
            <TextInput
                placeholder="Data de criação"
                autoCapitalize="none"
                style={estilos.entrada}
                value={data}
                onChangeText={setData}
            />
            <TouchableOpacity 
                style={estilos.botao} 
                onPress={salvar}
            >
                <Text style={estilos.textoBotao}>
                    Salvar
                </Text>
            </TouchableOpacity>
            <TouchableOpacity 
                onPress={deletar}
                style={[estilos.botao, {backgroundColor: 'red', marginTop: 10}]} 
            >
                <Text style={estilos.textoBotao}>
                    Deletar
                </Text>
            </TouchableOpacity>
        </View>
    );
}
