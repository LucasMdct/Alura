import React from 'react';
import { View, Image, StyleSheet, FlatList, ImageSourcePropType } from 'react-native';

import CustomText from 'components/CustomText';

export interface itemProtocol {
  item: {
    name: string;
    image: ImageSourcePropType;
  };
}
const Item: React.FC<itemProtocol> = ({ item }) => {

  return <View style={estilos.item}>
    <Image source={item.image} style={estilos.imagem}/>
    <CustomText style={estilos.nome}>{ item.name }</CustomText>
  </View>
}

export default Item;

const estilos = StyleSheet.create({
  item: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ECECEC",
    paddingVertical: 16,
    marginHorizontal: 16,
    alignItems: "center",
  },
  imagem: {
    width: 46,
    height: 46,
  },
  nome: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 11,
    color: "#464646"
  },
});
