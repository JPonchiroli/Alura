import React from "react";
import { TextInput } from "react-native-web";
import DefaultStyles from './styles'

export default function InputDeviceInfo({value, styles, action}){

    const update = (newValue, returnAction) => {
        const verifyInt = newValue.match(/^[0-9]*$/)
        if(!verifyInt) return;

        const removeZero = newValue.replace(/^(0)(.+)/,'$2')

        returnAction(removeZero)
    }

    const numberInText = String(value)

    return(
        <TextInput 
            style={[DefaultStyles.input, styles]}
            keyboardType='number-pad'
            selectTextOnFocus
            onChangeText={(newValue) => {update(newValue, action)}}
            value={numberInText}
        />
    )
}