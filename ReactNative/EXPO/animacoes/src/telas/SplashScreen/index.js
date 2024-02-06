import LottieView from 'lottie-react-native';
import splashDB1 from '../../assets/splashDb1.json';
import spashLoad from '../../assets/load.json';

import { View } from "react-native";
import styles from './styles';

export default function SplashScreen({ navigation }) {

    function animacaoFinalizada() {
        navigation.reset({
            index: 0,
            routes: [{ name: "Onboarding" }]
        })
    }

    return (
        <View style={styles.container}>
            <LottieView
                source={splashDB1}
                loop={false}
                autoPlay={true}
                onAnimationFinish={animacaoFinalizada}
            />
            <LottieView style={styles.load}
                source={spashLoad}
                loop={false}
                autoPlay={true}
                onAnimationFinish={animacaoFinalizada}
            />
        </View>
    )
}