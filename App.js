
import React from 'react';
import { StyleSheet, Text, View,StatusBar, SafeAreaView } from 'react-native';
import Cesta from './src/telas/cesta';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold} from '@expo-google-fonts/montserrat';

export default function App() {
  const [fonteCarregada]= useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold,
  });

  if (!fonteCarregada){
    return <View />
  }

  return (
    <SafeAreaView>
      <StatusBar/>
      <Cesta/>
    </SafeAreaView>
  );
}
