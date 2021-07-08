/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/* eslint-disable comma-dangle */

import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

    background: {
        backgroundColor: 'black',
        flex: 1
    },
    calculatorContainer: {
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: "flex-end",
    },
    result: {
        color: 'white',
        fontSize: 60,
        textAlign: "right",

    },
    smallResult: {
        color: "white",
        fontSize: 30,
        textAlign: "right",
    },
    row: {
        flexDirection: "row",
        justifyContent: "center",
        marginBottom: 18,
        paddingHorizontal: 10,
    },
    button: {
        height: 80,
        width: 80,
        backgroundColor: "#2D2D2D",
        borderRadius: 100,
        marginHorizontal: 5,
        justifyContent: "center"
    },
    buttonText: {
        textAlign: "center",
        padding: 10,
        fontSize: 30,
        color: "white",
        fontWeight: '600'
    }

});