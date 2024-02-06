import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image, StyleSheet, View, TouchableOpacity, Alert } from 'react-native';

import useTexts from 'hooks/useTexts';
import CustomText from 'components/CustomText';
import { BasketDetails, Producer } from 'mocks/interfaces/Interface-producers';

interface DetailsProps {
  producer: Producer;
  basketDetails: BasketDetails;
}

const Details: React.FC<DetailsProps> = ({ producer, basketDetails }) => {
  const navigation = useNavigation();
  const { bottonBuy } = useTexts();

  const { name, description, price } = basketDetails;

  return (
    <>
      <CustomText style={estilos.nome}>{name}</CustomText>
      <View style={estilos.fazenda}>
        <Image source={producer.image} style={estilos.imagemFazenda} />
        <CustomText style={estilos.nomeFazenda}>{producer.name}</CustomText>
      </View>
      <CustomText style={estilos.descricao}>{description}</CustomText>
      <CustomText style={estilos.preco}>{price}</CustomText>
      <TouchableOpacity
        style={estilos.botao}
        onPress={() => {
          // Adicione a lógica desejada aqui
          console.log('Button pressed');
          // Ou exiba um alerta
          Alert.alert('Button Pressed');
        }}>
        <CustomText style={estilos.textoBotao}>{bottonBuy}</CustomText>
      </TouchableOpacity>
    </>
  );
};

export default Details;

const estilos = StyleSheet.create({
  nome: {
    color: "#464646",
    fontSize: 26,
    lineHeight: 42,
    fontWeight: 'bold',
  },
  fazenda: {
    flexDirection: "row",
    paddingVertical: 12,
  },
  imagemFazenda: {
    width: 32,
    height: 32,
  },
  nomeFazenda: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 12,
  },
  descricao: {
    color: "#A3A3A3",
    fontSize: 16,
    lineHeight: 26,
  },
  preco: {
    color: "#2A9F85",
    fontWeight: "bold",
    fontSize: 26,
    lineHeight: 42,
    marginTop: 8,
  },
  botao: {
    marginTop: 16,
    backgroundColor: "#2A9F85",
    paddingVertical: 16,
    borderRadius: 6,
  },
  textoBotao: {
    textAlign: "center",
    color: "#ffffff",
    fontSize: 16,
    lineHeight: 26,
    fontWeight: "bold",
  },
})
