import React from "react";
import { View, Text, Image } from "react-native";
import styles from "../CardColaborador/styles";
import shimmerGif from '../../assets/shimmer.gif';

export function CardColaboradorShimmerEffect({estilos, cards}) {
  return (
    <View style={[styles.container,estilos]}>
      <View style={styles.pessoaArea}>
        <Image source={shimmerGif} style={[styles.foto, { overlayColor: '#FFF' }]} />
        <View style={styles.informacoes}>
          <Image source={shimmerGif} style={{ width: 200, height: 25 }} />
          <View style={styles.reuniaoArea}>
            <Image source={shimmerGif} style={{ width: 100, height: 15, marginTop: 5 }} />
          </View>
        </View>
      </View>
      <View style={[styles.informacoesAgendamento, cards]}>
        <Image source={shimmerGif} style={[{ width: 100, height: 15 }, cards]} />
        <View style={styles.botoesArea}>
        <Image source={shimmerGif} style={[{ width: '100%', height: 50, borderRadius: 10, overlayColor: '#FFF' }, cards]} />
        </View>
      </View>
    </View>
  );
}