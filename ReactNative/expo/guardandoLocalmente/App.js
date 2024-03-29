import { FlatList, SafeAreaView, StatusBar, StyleSheet, View } from "react-native"
import NotaEditor from "./src/components/NotaEditor"
import { Nota } from "./src/components/Nota"
import { useEffect, useState } from "react"
import { buscaNotas, criaTabela, filtraPorCategoria } from "./src/servicos/Notas"
import { Picker } from "@react-native-picker/picker"
export default function App() {
  useEffect(() => {
    criaTabela()
    mostraNotas()
  }, [])
  const [notaSelecionada, setNotaSelecionada] = useState({})
  const [notas, setNotas] = useState([])
  const [categoria, setCategoria] = useState("Todos")
  async function mostraNotas() {
    const todasNotas = await buscaNotas()
    setNotas(todasNotas)
    console.log(todasNotas)
  }
  async function filtraLista(categoriaSelecionada) {
    setCategoria(categoriaSelecionada)
    if(categoriaSelecionada == "Todos") {
      mostraNotas()
    } else {
      setNotas(await filtraPorCategoria(categoriaSelecionada))
    }
  }
  return (
    <SafeAreaView style={estilos.container}>
      <FlatList
        data={notas}
        renderItem={(nota) => <Nota {...nota} setNotaSelecionada={setNotaSelecionada}/>}
        keyExtractor={nota => nota.id}
        testID="flatlist"
        ListHeaderComponent={() => {return (
          <View style={estilos.picker}>
            <Picker selectedValue={categoria} onValueChange={(categoriaSelecionada) => filtraLista(categoriaSelecionada)} testID="picker">
              <Picker.Item label="Todos" value="Todos" testID="Todos" />
              <Picker.Item label="Pessoal" value="Pessoal" testID="Pessoal"/>
              <Picker.Item label="Trabalho" value="Trabalho" testID="Trabalho"/>
              <Picker.Item label="Outros" value="Outros" testID="Outros"/>
            </Picker>
          </View>
        )}}/>  
      <NotaEditor mostraNotas={mostraNotas} notaSelecionada={notaSelecionada} setNotaSelecionada={setNotaSelecionada}/>
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
  picker: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#EEEEEE",
    margin: 16,
  }
})