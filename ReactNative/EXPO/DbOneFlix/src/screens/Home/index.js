import React from "react";
import { View, Text, Button, SafeAreaView, StatusBar } from "react-native";
import Top from "./components/Top";
import Banner from "./components/Banner";
import CategoryFilter from "./components/CategoryFilter";
import styles from "./styles";
import Card from "../../components/Card";

export default function Home({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1}}>
      <View style={styles.container}>
        <Top />
         <Banner />
        <CategoryFilter /> 
        <Card textCard='Mobile'/>
        <Card textCard='Mobile'/>
        <Card textCard='Mobile'/>

        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Media')}
        />
      </View>
    </SafeAreaView>
  );
}
