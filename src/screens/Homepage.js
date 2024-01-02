import React from "react";
import {View, Text, StyleSheet, StatusBar, Platform, TextInput, TouchableOpacity} from "react-native";
import { Card } from "../components";
import { COLORS, SIZES, FONTS, SHADOW } from "../constants";

const styles = StyleSheet.create ({
        container:{
            paddingTop: Platform.OS === "android" ? StatusBar.currentHeight + 10 : 40,
            flex:1,
            backgroundColor: COLORS.primary,
            padding: SIZES.padding,
        },
        textBoxWrapper: {
            width: "100%",
            position: "absolute",
            bottom: 0,
            left: 0,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            padding: SIZES.padding,

        },
        textInput: {
            ...SHADOW,
            borderRadius: SIZES.borederRadius,
            backgroundColor: COLORS.secondary,
            height: 54,
            paddingLeft: 15,
            color: COLORS.primary,
            width: "inherit",
            ...FONTS.h2_semiBold
        },
        button:{
            backgroundColor: COLORS.accent,
            height: 54,
            width: 54,
            borderRadius: 90000,
            marginLeft: 10,
            alignItems: "center",
            justifyContent: "center",
        },
})

export default function Homepage(){
    return(
        <View style={styles.container}>
            <Card text={"Walk the dog"}/>

            <View style = {styles.textBoxWrapper}>
                <TextInput style={styles.textInput} placeholder="New Task"/>
                <TouchableOpacity style={styles.button}>
                    <Text style={{...FONTS.h1_semiBold, color: COLORS.shadow, fontSize: 30,}}>+</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}