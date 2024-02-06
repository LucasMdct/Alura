import React from "react";
import { Image, View } from "react-native";
import styles from './styles';
import cardImage from '../../assets/card.png';
import ButtonFlix from "../ButtonFlix";

const Card = ({textCard, pressCard}) => {
    return(
        <View style={styles.container}>
            <ButtonFlix textButton={textCard} Press={pressCard} stylesButtonFlix={styles.button} textButtonFlix={styles.textButton}/>
            <Image source={cardImage} style={styles.image} />
        </View>
    );
};

export default Card;