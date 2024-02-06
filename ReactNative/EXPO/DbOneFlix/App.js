import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView } from 'react-native';

import Routes from './src/routes';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 , backgroundColor: '#222'}}>
      <StatusBar style="auto" backgroundColor='#222' />
      <Routes />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    flex: 1,
    backgroundColor: '#222',
  },
});
