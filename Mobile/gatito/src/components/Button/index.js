import React from "react";
import { Text, TouchableOpacity } from "react-native";
import functionDefaultStyles from "./styles";

export default function Button({small = false, inverted = false, value, action, styles}){

    const defaultStyles = functionDefaultStyles(small, inverted)

    return(
        <TouchableOpacity onPress={action} style={[defaultStyles.button, styles]}>
            <Text style={[defaultStyles.value, styles]}>{value}</Text>
        </TouchableOpacity>
    )
}