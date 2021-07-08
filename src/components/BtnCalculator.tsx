/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable comma-dangle */

import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../theme/appTheme';

interface Props {
    text: string,
    colour?: string,
    width?: boolean,
    action: (textNumber: string) => void,
    changeSign?: () => void
}

const BtnCalculator = (
    { text, colour = "#2D2D2D", width = false, action }: Props) => {
    return (

        <TouchableOpacity
            onPress={() => action(text)}
        >
            <View style={{
                ...styles.button,
                backgroundColor: colour,
                width: (width) ? 160 : 80
            }}>
                <Text style={{
                    ...styles.buttonText,
                    color: (colour === "#9B9B9B") ? "black" : "white"
                }}>{text}</Text>
            </View >
        </TouchableOpacity>

    )
}

export default BtnCalculator;
