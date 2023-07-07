import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./Products.style"

const Products = ({mark}) => {
    return (
        <View style={styles.container}>

            <View style={styles.body}>

                <View style={styles.top}>
                    <Image style={styles.image} source={{uri: mark.imgURL}} />
                </View>

                <View style={styles.bottom}>
                    <Text style={styles.title}>{mark.title}</Text>
                    <Text style={styles.price}>{mark.price}</Text>
                    <Text style={styles.inStock} >{mark.inStock ? "" : "STOKTA YOK"}</Text>
                </View>

            </View>

        </View>

    )
}

export default Products;