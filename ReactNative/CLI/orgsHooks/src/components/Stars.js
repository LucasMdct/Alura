
import React, { useState } from "react";
import { StyleSheet, View} from "react-native";
import Star from './Star';


export default function Stars({
    quantity: oldQuantity,
    editable = false,
    big = false,
}) {
    const [ quantity , setQuantity ]  = useState(oldQuantity );



    const RenderStars = () => {
        const listStars = [];
        for (let i = 0; i < 5; i++) {
            listStars.push(
                <Star 
                key={i} 
                index={i}
                onPress={() => setQuantity(i+1)} 
                halt={!editable} 
                completed={i >= quantity}
                big={big} 
                testID={`star-${i}`} 
                labelTes/>
            );
        }

        return listStars;
        
    }

    return <View style={starStyle.starsFlex}>
        <RenderStars />
    </View>

}


const starStyle = StyleSheet.create({
    starsFlex: {
        flexDirection: 'row',
    },
})