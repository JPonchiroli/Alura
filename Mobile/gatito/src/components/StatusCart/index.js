import React from "react";
import { Text, View } from "react-native";
import styles from './styles'
import Button from "../Button";

export default function StatusCart({ total }) {
    return (
        <View style={styles.content}>
            <View style={styles.total}>
                <Text style={styles.description}>Cart Total:</Text>
                <Text style={styles.value}>
                    {
                        Intl.NumberFormat('pt-BR', {
                            style: 'currency', currency: 'BRL'
                        }).format(total)
                    }
                </Text>
            </View>
            <View style={styles.button}>
                <Button value='Complete Order' inverted={true}/>
            </View>
        </View>
    )
}