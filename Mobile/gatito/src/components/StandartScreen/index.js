import React from "react"
import {
    SafeAreaView, StatusBar,
    KeyboardAvoidingView, Platform
} from "react-native";
import GlobalStyles, { colors } from '../../styles'
import styles from "./styles";

export default function StandartScreen({ children }) {
    return (
        <>
            <SafeAreaView style={styles.fixScreen}>
                <StatusBar backgroundColor={colors.purple} />
                <KeyboardAvoidingView
                    behavior={Platform.OS == "ios" ? "padding" : "height"}
                    style={GlobalStyles.fill}
                >
                    {children}
                </KeyboardAvoidingView>
            </SafeAreaView>
            <SafeAreaView style={styles.fixScreenBelow}/>
        </>
    )
}