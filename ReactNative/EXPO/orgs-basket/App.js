import { StatusBar, SafeAreaView, } from 'react-native';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold,} from '@expo-google-fonts/montserrat';
import { useCallback } from 'react';
import Basket from './src/screens/baskets';
import mock from './src/mocks/basket';
import * as SplashScreen from 'expo-splash-screen';


 
export default function App() {
  const [fontLoading] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold,
  });
  
  const onLayoutRootView = useCallback(async () => {
    if (fontLoading) {
      await SplashScreen.hideAsync();
    }
  }, [fontLoading]);

  if (!fontLoading) {
    return null;
  }


  return (
      <SafeAreaView onLayout={onLayoutRootView} style={{ flex: 1}}  testID="splashScreen">
      <StatusBar />
        <Basket {...mock}/>
      </SafeAreaView>
  );
}
