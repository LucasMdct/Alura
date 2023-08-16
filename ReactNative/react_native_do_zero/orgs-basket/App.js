import { StatusBar, SafeAreaView , View } from 'react-native';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold} from '@expo-google-fonts/montserrat';
import React from 'react';
import Basket from './src/screens/basket';

export default function App() {
  const [fontLoading] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold,
  });
  
  if(!fontLoading) {
    return <View/>
  }

  return (
      <SafeAreaView>
      <Basket/>
      <StatusBar />
      </SafeAreaView>
  );
}