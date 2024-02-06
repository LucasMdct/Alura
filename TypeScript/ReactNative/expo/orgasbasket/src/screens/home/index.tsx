import React from 'react';
import { View, Text, SafeAreaView, Button } from 'react-native';
import { TabNavType } from '../../routes/types/navigationType';
import { useNavigation } from '@react-navigation/native';

export function Home() {
  const navigation = useNavigation<TabNavType>();

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View>
        <Text>Home!</Text>
        <Button
          title='Login'
          onPress={() => {
            navigation.navigate('Login');
          }}
        />
      </View>
    </SafeAreaView>
  );
}
