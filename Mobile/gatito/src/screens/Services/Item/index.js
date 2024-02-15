import React, { useState } from "react";
import { Text, TextInput, View, TouchableOpacity } from "react-native";
import styles from './styles'
import Input from '../../../components/Input'
import Button from "../../../components/Button";

export default function Item({ name, price, description }) {

    const [quantity, setQuantity] = useState(1);
    const [total, setTotal] = useState(price);
    const [expand, setExpand] = useState(false)

    const updateQuantityTotal = (newQuantity) => {
        setQuantity(newQuantity)
        calculateTotal(newQuantity)
    }

    const calculateTotal = (newQuantity) => {
        setTotal(newQuantity * price);
    }

    const invertExpand = () => {
        setExpand(!expand)
        updateQuantityTotal(1)
    }

    return (
        <>
            <TouchableOpacity style={styles.information} onPress={invertExpand}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.description} >{description}</Text>
                <Text style={styles.price}>{
                    Intl.NumberFormat('pt-BR', {
                        style: 'currency', currency: 'BRL'
                    }).format(price)
                }
                </Text>
            </TouchableOpacity>
            {expand &&
                <View style={styles.cart}>
                    <View>
                        <View style={styles.value}>
                            <Text style={styles.description}>Quantity: </Text>
                            <Input value={quantity} styles={styles.quantity} action={updateQuantityTotal} />
                        </View>
                        <View style={styles.value}>
                            <Text style={styles.description}>Total: </Text>
                            <Text style={styles.price}>{
                                Intl.NumberFormat('pt-BR', {
                                    style: 'currency', currency: 'BRL'
                                }).format(total)}</Text>
                            <TextInput />
                        </View>
                        <Button value="Add to Cart" action={() => { }} />
                    </View>
                </View>
            }
            <View style={styles.divider} />
        </>
    )
}