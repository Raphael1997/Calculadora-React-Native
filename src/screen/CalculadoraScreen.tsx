/* eslint-disable prettier/prettier */
/* eslint-disable curly */
/* eslint-disable quotes */

import React from 'react';

import { View, Text } from 'react-native';
import BtnCalculator from '../components/BtnCalculator';
import { useCalculator } from '../hook/useCalculator';
import { styles } from '../theme/appTheme';


const CalculadoraScreen = () => {

    const {
        cleanScreen,
        validateNumbers,
        deleteLastInput,
        btnAdd,
        btnDivide,
        btnMultiply,
        btnSubtract,
        calculate,
        changeSign,
        number,
        beforeNumber,
    } = useCalculator();
    return (
        <View style={styles.calculatorContainer}>
            {
                (beforeNumber !== "0") && (
                    <Text style={styles.smallResult}>{beforeNumber}</Text>
                )
            }
            <Text
                style={styles.result}
                numberOfLines={1}
                adjustsFontSizeToFit
            >
                {number}
            </Text>

            <View style={styles.row}>
                <BtnCalculator text={"C"} colour={"#9B9B9B"} action={cleanScreen} />
                <BtnCalculator text={"+/-"} colour={"#9B9B9B"} action={changeSign} />
                <BtnCalculator text={"DEL"} colour={"#9B9B9B"} action={deleteLastInput} />
                <BtnCalculator text={"/"} colour={"#FF9427"} action={btnDivide} />
            </View>

            {/* row of buttons */}
            <View style={styles.row}>
                <BtnCalculator text={"7"} action={validateNumbers} />
                <BtnCalculator text={"8"} action={validateNumbers} />
                <BtnCalculator text={"9"} action={validateNumbers} />
                <BtnCalculator text={"X"} colour={"#FF9427"} action={btnMultiply} />
            </View>

            <View style={styles.row}>
                <BtnCalculator text={"4"} action={validateNumbers} />
                <BtnCalculator text={"5"} action={validateNumbers} />
                <BtnCalculator text={"6"} action={validateNumbers} />
                <BtnCalculator text={"-"} colour={"#FF9427"} action={btnSubtract} />
            </View>

            <View style={styles.row}>
                <BtnCalculator text={"1"} action={validateNumbers} />
                <BtnCalculator text={"2"} action={validateNumbers} />
                <BtnCalculator text={"3"} action={validateNumbers} />
                <BtnCalculator text={"+"} colour={"#FF9427"} action={btnAdd} />
            </View>

            <View style={styles.row}>
                <BtnCalculator text={"0"} width action={validateNumbers} />
                <BtnCalculator text={"."} action={validateNumbers} />
                <BtnCalculator text={"="} colour={"#FF9427"} action={calculate} />
            </View>
        </View>
    )
}

export default CalculadoraScreen;
