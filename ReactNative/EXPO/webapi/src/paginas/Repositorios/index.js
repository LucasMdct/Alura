import React, { useEffect, useState } from 'react';
import { Text, View, FlatList, TouchableOpacity, TextInput, Alert } from 'react-native';
import estilos from './estilos';
import { searchRepos, PegarRepositoriosDoUsuarioPeloNome } from '../../servicos/requisicoes/repo';
import { useIsFocused } from '@react-navigation/native';


export default function Repositorios({ route, navigation }) {
    const [repo, setRepo] = useState([]);
    const [nomeRepo, setNomeRepo] = useState('');
    const atualizarTela = useIsFocused();

    // async function buscarRepositorioPorNome() {
    //        if (nomeRepo.trim() === '') {
    //     // Não fazer a busca se o campo estiver vazio
    //     return;
    // }

    // const resultado = await PegarRepositoriosDoUsuarioPeloNome(route.params.id, nomeRepo);
    // setRepo(resultado);
    // setNomeRepo('');
    // }

    useEffect(() => {
        async function fetchData() {
            const resultado = await searchRepos(route.params.username);
            setRepo(resultado);
        }

        fetchData();
    }, [atualizarTela, username]);

    return (
        <View style={estilos.container}>

             <TextInput
                    value={nomeRepo}
                    onChangeText={setNomeRepo}
                    placeholder="Busque por um Repositorio"
                    autoCapitalize="none"
                    style={estilos.entrada}
                />
                <TouchableOpacity 
                    onPress={buscarRepositorioPorNome}
                >
                    <Text style={{marginTop: 10,}}>Buscar</Text>
                </TouchableOpacity>

            <Text style={estilos.repositoriosTexto}>{repo.length} repositórios criados</Text>


            <TouchableOpacity
                style={estilos.botao}
                onPress={() => navigation.navigate('CriarRepositorio', {id: route.params.id})}
            >
                <Text style={estilos.textoBotao}>Adicionar novo repositório</Text>
            </TouchableOpacity>
            <FlatList
                data={repo}
                style={{ width: '100%' }}
                keyExtractor={repo => repo.id}
                renderItem={({ item }) => (
                    <TouchableOpacity style={estilos.repositorio}
                        onPress={() => navigation.navigate('InfoRepositorio', { item })}>
                        <Text style={estilos.repositorioNome}>{item.name}</Text>
                        <Text style={estilos.repositorioData}>{item.data}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}
