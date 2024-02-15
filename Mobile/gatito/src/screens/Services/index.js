import React from "react";
import {
    FlatList
} from "react-native";
import Item from "./Item";

const services = [
    {
        id: 1,
        name: "Bath",
        price: 79.9,
        description: "DO NOT BATH YOUR CAT! But if you need us we will give"
    },
    {
        id: 2,
        name: "Vaccine V4",
        price: 89.9,
        description: "One dose of V4 vaccine, your cat needs two!"
    },
    {
        id: 3,
        name: "Vaccine Anti-rabies",
        price: 99.9,
        description: "One dose of Anti-rabies vaccine"
    }
]

export default function Services() {
    return (
        <>
            <FlatList
                data={services}
                removeClippedSubviews={false}
                renderItem={({ item }) => <Item {...item} />}
                keyExtractor={(item) => String(item.id)}
            />
        </>
    )
}