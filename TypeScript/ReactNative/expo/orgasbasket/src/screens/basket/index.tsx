import React from 'react';
import { useRoute } from '@react-navigation/native';
import { FlatList, StyleSheet, View } from 'react-native';

import CustomText from 'components/CustomText';

import Top from 'components/Top';

import useTexts from 'hooks/useTexts';

import Details from './components/details';
import Item from './components/item';

import { BasketDetails, BasketItem, Producer } from 'mocks/interfaces/Interface-producers';

// Defina uma interface para os parâmetros da rota
interface BasketRouteParams {
  details: BasketDetails;
  itens: BasketItem[];
  producer: Producer;
}

export default function Basket() {
  const route = useRoute();

  const { topBasket, titleItens } = useTexts();

  const { details, itens, producer } = route.params as BasketRouteParams;

  return (
    <>
      <FlatList
        data={itens}
        renderItem={({ item }) => <Item item={item} />} // Certifique-se de passar o item para o componente Item
        keyExtractor={({ name }) => name}
        ListHeaderComponent={() => {
          return (
            <>
              <Top title={topBasket} />
              <View style={estilos.cesta}>
                <Details {...details} producer={producer} />
                <CustomText style={estilos.titulo}>{titleItens}</CustomText>
              </View>
            </>
          );
        }}
        style={estilos.lista}
      />
    </>
  );
}

const estilos = StyleSheet.create({
  lista: {
    backgroundColor: '#ffffff',
  },
  titulo: {
    color: '#464646',
    fontWeight: 'bold',
    marginTop: 32,
    marginBottom: 8,
    fontSize: 20,
    lineHeight: 32,
  },
  cesta: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});
