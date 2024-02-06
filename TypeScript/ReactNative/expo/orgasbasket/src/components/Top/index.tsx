import React from 'react';
import { View, ImageSourcePropType, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import CustomText from '../CustomText';

import Gradient from '../../assets/gradient.svg';

import top from '../../assets/top.png';

import ReturnSVG from '../../assets/return.svg';

const widthScreen = Dimensions.get('screen').width;

interface TopProps {
  title?: string;
  image?: ImageSourcePropType;
}

const Top: React.FC<TopProps> = ({ title, image = top }) => {
  const navigation = useNavigation();
  const styles = functionStyle();

  return (
    <>
      {/* Imagem principal */}
      <Image source={image} style={styles.topo} />

      {/* Gradiente */}
      <Gradient width={widthScreen} height={130 / 360 * widthScreen} style={styles.gradiente} />

      {/* Título personalizado */}
      <CustomText style={styles.titulo}>{title}</CustomText>

      {/* Botão de voltar com ícone */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.botaoVoltar}>
        <ReturnSVG color='white' style={styles.voltar} />
      </TouchableOpacity>
    </>
  );
};

const functionStyle = () => StyleSheet.create({
  // Estilos para a imagem principal
  topo: {
    width: '100%',
    height: 270, // Certifique-se de que a altura seja dinâmica
    // Adicione outros estilos desejados para a imagem principal
  },

  // Estilos para o gradiente
  gradiente: {
    position: 'absolute',
    // Adicione outros estilos desejados para o gradiente
  },

  // Estilos para o título personalizado
  titulo: {
    color: '#464646',
    fontWeight: 'bold',
    marginTop: 32,
    marginBottom: 8,
    fontSize: 20,
    lineHeight: 32,
    // Adicione outros estilos desejados para o título
  },

  // Estilos para o botão de voltar
  botaoVoltar: {
    position: 'absolute',
    // Adicione outros estilos desejados para o botão de voltar
  },

  // Estilos para o ícone de voltar
  voltar: {
    width: 24,
    height: 24,
    // Adicione outros estilos desejados para o ícone de voltar
  },
});

export default Top;
