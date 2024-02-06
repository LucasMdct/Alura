import React from "react";
import { Text, View, StyleSheet } from 'react-native';
import styles from './styles';
import TopFlix from "../../../../components/TopFlix";

const Top = () => {

  return (
    <View style={styles.container}>
       <TopFlix />
    </View>
  );
};


export default Top;
