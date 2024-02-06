import React, { useState } from 'react';
import { View, Text, Alert } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts, BebasNeue_400Regular, Roboto } from '@expo-google-fonts/bebas-neue';
import styles from './styles';
import LottieView from 'lottie-react-native';
import Load from '../../assets/animations/Load.json';
import TitleLoad from '../../assets/animations/TitleLoad.json';

export default function SplashScreen({ navigation }) {
  const [isReady] = useFonts({
    BebasNeue: BebasNeue_400Regular,
    RobotoFont: Roboto,
    // Adicione mais fonts se necessário
  });
  
  const onAnimationFinish = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Home' }],
    });
  };

  const splashContent = (
    <View style={styles.container}>
      <LottieView
        style={styles.load}
        source={Load}
        loop={false}
        autoPlay={true}
        onAnimationFinish={onAnimationFinish}
      />
      <LottieView
        source={TitleLoad}
        loop={false}
        autoPlay={true}
        onAnimationFinish={onAnimationFinish}
      />
    </View>
  );


  return !isReady ? splashContent : (
    <>
      {splashContent}
    </>
  );
}
