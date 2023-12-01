import React from 'react';

import { SafeAreaView, StatusBar, KeyboardAvoidingView, Platform } from 'react-native';
import estilosGlobal from '../../estilos';
import estilos from './estilos';

export default function TelaPadrao({ children }) {
  return <>
    <SafeAreaView testID="safeAreaViewTop" style={estilos.ajusteTela} >
      <StatusBar />
      <KeyboardAvoidingView
        testID="keyboardView"
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={estilosGlobal.preencher}
      >
        {children}
      </KeyboardAvoidingView>
    </SafeAreaView>
    <SafeAreaView testID="safeAreaViewBottom" style={estilos.ajusteTelaBaixo} />
  </>

}