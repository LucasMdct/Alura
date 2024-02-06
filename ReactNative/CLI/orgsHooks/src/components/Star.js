import React from "react";
import { TouchableOpacity, Image, StyleSheet} from "react-native";

import star from '../assets/star.png';
import starGrey from '../assets/starGrey.png';



export default function Star({ onPress, halt = false, completed, big = false, index }) {

    const styles = starStyleFunction(big);

    const getImage = () => {
        if (!completed) {
            return star;  
        }
        return starGrey;
    }

    return <TouchableOpacity
        accessibilityHint={`Star`}
        testID={`star-${index}`}  
        onPress={onPress}
        disabled={halt}>
        <Image source={getImage()} style={styles.star} />
    </TouchableOpacity>
}

const starStyleFunction = (big) => StyleSheet.create({
    star: {
        width: big ? 36 : 12,
        height: big ? 36 : 12,
        marginRight: 2,
    },
})