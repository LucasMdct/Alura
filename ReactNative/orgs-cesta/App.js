import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Basket from './src/screens/basket';

export default function App() {
  return (
    <View style={styles.container}>

      <Basket/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d3d3',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
