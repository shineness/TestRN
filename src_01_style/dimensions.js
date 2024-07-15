import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'

export default function dimensions() {
    return (
        <View styles={[styles.container]}>
            <View style={[styles.itemBase]}>
                <Text >扫一扫</Text>
            </View>
            <View style={[styles.itemBase]}>
                <Text >付款码</Text>
            </View>
            <View style={[styles.itemBase]}>
                <Text>卡包</Text>
            </View>
            <View style={[styles.itemBase]}>
                <Text>出行</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row"
    },
    itemBase: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#00b38a",
        width: Dimensions.get("window").width / 4

    }
})