import React from "react";
import { TouchableOpacity, View, Text} from "react-native";
import styles from "./styles";

 const ButtonFlix = ({textButton, Press, disable, stylesButtonFlix, textButtonFlix}) => {
    return (
        <View style={styles.view}>
        <TouchableOpacity onPress={Press} style={[styles.design, stylesButtonFlix]} disabled={disable}>
          <Text style={[styles.btext, textButtonFlix]}>{textButton}</Text>
        </TouchableOpacity>
      </View>
    )
}

export default ButtonFlix;