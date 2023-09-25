
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Home from './src/screens/Home/index';

function App() {
  return <SafeAreaView style={styleApp.screen}>
    <Home />
  </SafeAreaView>

}

const styleApp = StyleSheet.create({
  screen: {
    flex: 1,
  }
})

export default App;
