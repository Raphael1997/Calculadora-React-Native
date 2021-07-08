/* eslint-disable prettier/prettier */
/* eslint-disable curly */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable quotes */

import React, { useState } from 'react';

import { View, Text } from 'react-native';
import BtnCalculator from '../components/BtnCalculator';
import { styles } from '../theme/appTheme';

const CalculadoraScreen = () => {

    const [number, setNumber] = useState("100");
    const [beforeNumber, setBeforeNumber] = useState("0");

    /**
     * Resea el resultado a 0
     */
    const cleanScreen = () => {
        setNumber("0");
    }

    /**
     * Coge el número por defecto más el siguiente número que el usuario digita
     * @param textNumber número que el usuario digita
     */
    const validateNumbers = (textNumber: string) => {

        // verificar si ya existe un punto decimal
        if (number.includes(".") && textNumber === ".") return;

        if (number.startsWith("0") || number.startsWith("-0")) {

            if (textNumber === ".") {
                setNumber(number + textNumber);
            } // evaluar so hay otro 0
            else if (textNumber === "0" && number.includes(".")) {
                setNumber(number + textNumber);
            } // evaluar si es difernte de 0 y no tiene un punto 
            else if (textNumber !== "0" && !number.includes(".")) {
                setNumber(textNumber);
            } // evitar 0000.0
            else if (textNumber === "0" && !number.includes(".")) {
                setNumber(number);
            } else {
                setNumber(number + textNumber);
            }
        } else {
            setNumber(number + textNumber);
        }

    }

    // delet que last input 
    const deleteLastInput = () => {

    }

    /**
     * Cambia el signo del número
     */
    const changeSign = () => {
        if (number.includes("-")) setNumber(number.replace("-", ""));
        else setNumber("-" + number);
    }
    return (
        <View style={styles.calculatorContainer}>
            <Text style={styles.smallResult}>{beforeNumber}</Text>
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
                <BtnCalculator text={"DEL"} colour={"#9B9B9B"} action={cleanScreen} />
                <BtnCalculator text={"/"} colour={"#FF9427"} action={cleanScreen} />
            </View>

            {/* row of buttons */}
            <View style={styles.row}>
                <BtnCalculator text={"7"} action={validateNumbers} />
                <BtnCalculator text={"8"} action={validateNumbers} />
                <BtnCalculator text={"9"} action={validateNumbers} />
                <BtnCalculator text={"X"} colour={"#FF9427"} action={cleanScreen} />
            </View>

            <View style={styles.row}>
                <BtnCalculator text={"4"} action={validateNumbers} />
                <BtnCalculator text={"5"} action={validateNumbers} />
                <BtnCalculator text={"6"} action={validateNumbers} />
                <BtnCalculator text={"-"} colour={"#FF9427"} action={cleanScreen} />
            </View>

            <View style={styles.row}>
                <BtnCalculator text={"1"} action={validateNumbers} />
                <BtnCalculator text={"2"} action={validateNumbers} />
                <BtnCalculator text={"3"} action={validateNumbers} />
                <BtnCalculator text={"+"} colour={"#FF9427"} action={cleanScreen} />
            </View>

            <View style={styles.row}>
                <BtnCalculator text={"0"} width action={validateNumbers} />
                <BtnCalculator text={"."} action={validateNumbers} />
                <BtnCalculator text={"="} colour={"#FF9427"} action={cleanScreen} />
            </View>
        </View>
    )
}

export default CalculadoraScreen;
