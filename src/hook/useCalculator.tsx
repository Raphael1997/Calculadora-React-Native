/* eslint-disable prettier/prettier */
/* eslint-disable curly */
/* eslint-disable quotes */

import { useRef, useState } from "react";

enum Operators {
    add, subtract, divide, multiply
}

export const useCalculator = () => {
    const [number, setNumber] = useState("100");
    const [beforeNumber, setBeforeNumber] = useState("0");
    const lastOperator = useRef<Operators>();

    /**
     * Resea el resultado a 0
     */
    const cleanScreen = () => {
        setNumber("0");
        setBeforeNumber("0");
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

    /**
     *  delet que last input
     */
    const deleteLastInput = () => {

        let negative = "";
        let tempNumber = number;

        if (number.includes("-")) {
            negative = "-";
            tempNumber = number.substr(1);
        }

        if (tempNumber.length > 1) {
            setNumber(negative + tempNumber.slice(0, -1));
        } else {
            setNumber("0");
        }
    }

    /**
     * Si el numero acaba con . (punto), le quitamos el punto
     */
    const changeBeforeNumber = () => {

        if (number.endsWith(".")) {

            setBeforeNumber(number.slice(0, -1));
        } else {
            setBeforeNumber(number);
        }
        setNumber("0");
    }

    /**
     * boton de dividir
     */
    const btnDivide = () => {
        changeBeforeNumber();
        lastOperator.current = Operators.divide;

    }

    /**
     * boton de multiplicar
     */
    const btnMultiply = () => {
        changeBeforeNumber();
        lastOperator.current = Operators.multiply;

    }

    /**
     *  boton de restar
     */
    const btnSubtract = () => {
        changeBeforeNumber();
        lastOperator.current = Operators.subtract;

    }

    /**
     * boton de sumar
     */
    const btnAdd = () => {
        changeBeforeNumber();
        lastOperator.current = Operators.add;

    }

    /**
     * Cambia el signo del número
     */
    const changeSign = () => {
        if (number.includes("-")) setNumber(number.replace("-", ""));
        else setNumber("-" + number);
    }

    const calculate = () => {

        const number1 = Number(number);
        const number2 = Number(beforeNumber);

        switch (lastOperator.current) {
            case Operators.add:
                setNumber(`${number1 + number2}`);
                break;
            case Operators.subtract:
                setNumber(`${number2 - number1}`);
                break;
            case Operators.multiply:
                setNumber(`${number1 * number2}`);
                break;
            case Operators.divide:
                if (number1 === 0) {
                    setNumber("No se puede dividir por cero");
                } else {
                    setNumber(`${number2 / number1}`);
                }
                break;
        }

        setBeforeNumber("0");

    }

    return {
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
    }
}