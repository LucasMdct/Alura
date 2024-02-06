import React, { useState } from 'react';
import { View, Text, StatusBar, Image, TouchableOpacity, LayoutAnimation } from 'react-native';
import FundoOndulado from '../../componentes/FundoOndulado';
import { TelaDeFundo } from '../../componentes/TelaDeFundo';
import { Formulario } from '../../componentes/Formulario';
import itens from './cards';
import styles from './styles';
import { Carrossel } from '../../componentes/Carrossel';

export default function Onboarding({ navigation }) {
  const [fazerLogin, setFazerLogin] = useState(false);
  const [altura, setAltura] = useState(250);

  const animacaoCustumizada = {
     duration: 1000,
     create: {
        type: LayoutAnimation.Types.spring,
        property: LayoutAnimation.Properties.scaleXY,
        springDamping: 0.7
     }
  }

  LayoutAnimation.configureNext(animacaoCustumizada);

  function avancar() {
    if (fazerLogin) {
      navigation.navigate('Principal');
    } else {
      setAltura(400);
      LayoutAnimation.linear();
      setFazerLogin(true);
    }
  }

  return (
    <TelaDeFundo>
      <View style={styles.container}>
        <StatusBar barStyle='dark-content' backgroundColor='#FFF' />
        <Image
          source={require('../../assets/logo.png')}
          style={styles.logo}
        />

        <View style={styles.carrosselArea}>
          {!fazerLogin && (
              <Carrossel data={itens} />
            )}
        </View>
        <Image
          source={require('../../assets/culture.png')}
          style={styles.controlImg}
        />
        <FundoOndulado height={altura}>
          <View style={styles.infoArea}>
            {fazerLogin ?
              <Formulario
                titulo="Olá! Acesse sua conta"
                texto="Entre com suas informações."
              />
              :
              <View>
                <Text style={styles.titulo}>Gerencie as suas Reuniões</Text>
                <Text style={styles.texto}>
                  Você consegue gerenciar todas suas Reuniões e ver o tempo médio de cada, e a quantidade de Reuniões realizadas.
                </Text>
              </View>
            }

            <TouchableOpacity style={styles.botao} onPress={avancar}>
              <Text style={styles.botaoTexto}>{fazerLogin ? 'Entrar' : 'Começar'}</Text>
            </TouchableOpacity>
          </View>
        </FundoOndulado>
      </View>
    </TelaDeFundo>
  );
}