/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable quotes */

import React, { useState } from 'react';

import { View, Text } from 'react-native';
import BtnCalculator from '../components/BtnCalculator';
import { styles } from '../theme/appTheme';

const CalculadoraScreen = () => {

    const [number, setNumber] = useState("100");
    const [beforeNumber, setBeforeNumber] = useState("0");

    const cleanScreen = () => {
        setNumber("0");
    }

    const thorowNumber = (textNumber: string) => {
        setNumber(number + textNumber);
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
                <BtnCalculator text={"+/-"} colour={"#9B9B9B"} action={cleanScreen} />
                <BtnCalculator text={"DEL"} colour={"#9B9B9B"} action={cleanScreen} />
                <BtnCalculator text={"/"} colour={"#FF9427"} action={cleanScreen} />
            </View>

            {/* row of buttons */}
            <View style={styles.row}>
                <BtnCalculator text={"7"} action={thorowNumber} />
                <BtnCalculator text={"8"} action={thorowNumber} />
                <BtnCalculator text={"9"} action={thorowNumber} />
                <BtnCalculator text={"X"} colour={"#FF9427"} action={cleanScreen} />
            </View>

            <View style={styles.row}>
                <BtnCalculator text={"4"} action={thorowNumber} />
                <BtnCalculator text={"5"} action={thorowNumber} />
                <BtnCalculator text={"6"} action={thorowNumber} />
                <BtnCalculator text={"-"} colour={"#FF9427"} action={cleanScreen} />
            </View>

            <View style={styles.row}>
                <BtnCalculator text={"1"} action={thorowNumber} />
                <BtnCalculator text={"2"} action={thorowNumber} />
                <BtnCalculator text={"3"} action={thorowNumber} />
                <BtnCalculator text={"+"} colour={"#FF9427"} action={cleanScreen} />
            </View>

            <View style={styles.row}>
                <BtnCalculator text={"0"} width action={thorowNumber} />
                <BtnCalculator text={"."} action={thorowNumber} />
                <BtnCalculator text={"="} colour={"#FF9427"} action={cleanScreen} />
            </View>
        </View>
    )
}

export default CalculadoraScreen;
