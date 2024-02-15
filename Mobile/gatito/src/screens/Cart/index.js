import React from "react";
import {
    FlatList
} from "react-native";
import Item from "./Item";
import StatusCart from "../../components/StatusCart";

const services = [
    {
        id: 1,
        name: "Bath",
        price: 79.9,
        description: "DO NOT BATH YOUR CAT! But if you need us we will give",
        quantity: 1
    },
    {
        id: 2,
        name: "Vaccine V4",
        price: 89.9,
        description: "One dose of V4 vaccine, your cat needs two!",
        quantity: 2
    },
    {
        id: 3,
        name: "Vaccine Anti-rabies",
        price: 99.9,
        description: "One dose of Anti-rabies vaccine",
        quantity: 1
    }
]

export default function Cart() {

    const total = services.reduce((sum, {price, quantity}) => sum + (price * quantity), 0)

    return (
        <>
            <StatusCart total={total} />
            <FlatList
                data={services}
                removeClippedSubviews={false}
                renderItem={({ item }) => <Item {...item} />}
                keyExtractor={(item) => String(item.id)}
            />
        </> 
    )
}