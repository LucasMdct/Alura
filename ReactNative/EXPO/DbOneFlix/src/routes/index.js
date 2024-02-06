import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// SCREENS
import  SplashScreen  from '../screens/SplashScreen';
import Home from "../screens/Home";
import Media from "../screens/Media";

const Stack = createStackNavigator();

export default function Routes() {


  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
        <Stack.Screen name="Media" component={Media} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
