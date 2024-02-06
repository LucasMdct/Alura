import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, SafeAreaView, Button } from 'react-native';
import { TabNavType } from '../../routes/types/navigationType';

import Top from '../../components/Top/index';

export function Login() {
  const navigation = useNavigation<TabNavType>();

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View>
        <Top />
      <Text>Login!</Text>
      <Button
      title='Home'
      onPress={() => {
        navigation.navigate('Home');
      }}></Button>
      </View>
    </SafeAreaView>
  );
}
