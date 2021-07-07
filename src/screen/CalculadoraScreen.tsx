/* eslint-disable prettier/prettier */
/* eslint-disable quotes */

import React from 'react';

import { View, Text } from 'react-native';
import BtnCalculator from '../components/BtnCalculator';
import { styles } from '../theme/appTheme';

const CalculadoraScreen = () => {
    return (
        <View style={styles.calculatorContainer}>
            <Text style={styles.smallResult}>1,500.00</Text>
            <Text style={styles.result}>1,500.00</Text>

            <View style={styles.row}>
                <BtnCalculator text={"C"}  colour={"#9B9B9B"} />
                <BtnCalculator text={"+/-"} colour={"#9B9B9B"} />
                <BtnCalculator text={"DEL"} colour={"#9B9B9B"} />
                <BtnCalculator text={"/"} colour={"#FF9427"} />
            </View>
        </View>
    )
}

export default CalculadoraScreen;
