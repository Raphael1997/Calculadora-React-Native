/* eslint-disable prettier/prettier */

import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../theme/appTheme';

interface Props {
    text: string,
    colour?: string
}

const BtnCalculator = ({ text, colour }: Props) => {
    return (
        <View style={{
            ...styles.button,
            backgroundColor: colour
        }}>
            <Text style={styles.buttonText}>{text}</Text>
        </View>
    )
}

export default BtnCalculator;
