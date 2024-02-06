import React from "react";
import { Alert, View, FlatList } from "react-native";
import styles from "./styles";
import ButtonFlix from "../../../../components/ButtonFlix";

const CategoryFilter = () => {



  const mock = () => {
    Alert.alert('Sucesso');
  };

  const data = [
    { id: '1', text: 'Front-end', cor: '#5781EF' },
    { id: '2', text: 'Programacao', cor: '#19940F' },
    { id: '3', text: 'Mobile', cor: '#D82D2D' },
    { id: '4', text: 'Back-end', cor: '#FF5733' },
    { id: '5', text: 'Mobile', cor: '#33FF57' },
    { id: '6', text: 'Back-end', cor: '#5733FF' },
    { id: '7', text: 'Mobile', cor: '#FF5733' },
    { id: '8', text: 'Back-end', cor: '#33FF57' },
  ];

  const renderItem = ({ item }) => (
    <ButtonFlix textButton={item.text} Press={mock} stylesButtonFlix={{ ...styles.button, backgroundColor: item.cor }} textButtonFlix={styles.text} />
  );


  return (
    <View style={styles.container}>
      <FlatList
        style={styles.FlatList}
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal={true} // Se desejar uma lista horizontal
        pagingEnabled={true}
      />
    </View>
  );
};

export default CategoryFilter;
