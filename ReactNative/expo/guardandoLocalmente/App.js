import { FlatList, SafeAreaView, StatusBar, StyleSheet } from "react-native"
import NotaEditor from './src/components/NotaEditor';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { Nota } from "./src/components/Nota";
import { criaTabela } from "./src/servicos/Notas";

export default function App() {

  useEffect(() => {
    criaTabela();
  }, [])



  const [notas, setNotas] = useState([]);

  async function mostraNotas() {
    const todasChaves = await AsyncStorage.getAllKeys();
    const todasNotas = await AsyncStorage.multiGet(todasChaves);
    setNotas(todasNotas);
    console.log(todasNotas);
  }

  return (
    <SafeAreaView style={estilos.container}>
      <FlatList 
        data={notas}
        renderItem={(nota) => <Nota {...nota} />}
        keyExtractor={nota => nota[0]}
      />
      <NotaEditor mostraNotas={mostraNotas} />
      <StatusBar/>
    </SafeAreaView>
  )
}

const estilos = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "stretch",
		justifyContent: "flex-start",
	},
})

