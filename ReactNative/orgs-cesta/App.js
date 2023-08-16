import { StatusBar, SafeAreaView , View } from 'react-native';
import React from 'react';
import Basket from './src/screens/basket';

export default function App() {
  return (
      <SafeAreaView>
      <Basket/>
      <StatusBar style="auto" />
      </SafeAreaView>
  );
}
