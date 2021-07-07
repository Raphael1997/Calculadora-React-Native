/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
/* eslint-disable semi */
import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native';
import CalculadoraScreen from './src/screen/CalculadoraScreen';

import { styles } from "./src/theme/appTheme";
const App = () => {
  return (
    <SafeAreaView style={styles.background}>
      <StatusBar 
      backgroundColor="blue"
      barStyle="light-content"
      
      />
      <CalculadoraScreen />
    </SafeAreaView>
  )
}

export default App
