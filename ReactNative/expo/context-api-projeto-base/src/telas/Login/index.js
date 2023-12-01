import { useState } from "react";
import { Text, View, TextInput, TouchableOpacity, StatusBar, Image } from 'react-native';
import { estilo } from './estilos';

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <View style={estilo.container}>
      <StatusBar />
      <View style={estilo.containerLogin}>
        <Image
          source={require('../../../assets/logo.png')}  // Substitua 'sua_imagem.png' pelo nome da sua imagem.
          style={estilo.imagem}
          accessibilityLabel="Logo da empresa ching ling produtos"
        />
        <Text style={estilo.titulo}>Login</Text>

        <View style={estilo.inputArea}>
          <TextInput
            style={estilo.input}
            placeholder="Email"
            placeholderTextColor="#999"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            style={estilo.input}
            placeholder="Senha"
            placeholderTextColor="#999"
            autoCapitalize="none"
            value={senha}
            onChangeText={setSenha}
          />
        </View>

        <TouchableOpacity
          style={estilo.botao}
          onPress={() => navigation.navigate('Principal')}
        >
          <Text style={estilo.botaoTexto}>Entrar</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}

