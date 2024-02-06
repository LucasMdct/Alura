import React from "react";
import { View, Text, Button } from "react-native";

export default function Media({navigation}) {
    return( 
        <View>
            <Text>Sua tela de Media</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Home')}
            />   
        </View>
    )
}