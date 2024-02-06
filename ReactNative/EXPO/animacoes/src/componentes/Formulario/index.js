import React, {useState} from 'react';
import { View, TextInput, Text } from 'react-native';
import styles from './styles';

export function Formulario({ titulo, texto, onEmailChange, onSenhaChange  }){
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{titulo}</Text>
      <Text style={styles.texto}>{texto}</Text>
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        placeholderTextColor="#999"
        autoCapitalize="none"
        autoCorrect={false}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor="#999"
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry
        value={senha}
      />
      <Text style={styles.esqueciSenha}>Esqueci minha senha</Text>
    </View>
  );
}