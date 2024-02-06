import React, { ReactNode } from 'react';
import { Text, StyleSheet, StyleProp } from 'react-native';
import { CustomTextProtocol ,TextProtocol  } from './interfaces/custom-text-interface';

export default function CustomText({ children, style }: TextProtocol) {
  let estilo: StyleProp<CustomTextProtocol> = estilos.texto;

  if (style && 'fontWeight' in style && style.fontWeight === 'bold') {
    estilo = estilos.textoNegrito;
  }

  return (
    <Text style={[style, estilo]}>{children}</Text>
  );
}

const estilos = StyleSheet.create({
  texto: {
    // fontFamily: 'MontserratRegular',
    fontWeight: 'normal',
  },
  textoNegrito: {
    // fontFamily: 'MontserratBold',
    fontWeight: 'bold',
  },
});
