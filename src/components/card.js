import React from "react";
import { View, Text, StyleSheet, CheckBox} from "react-native";
import { SIZES, FONTS, COLORS } from "../constants";

const styles = StyleSheet.create({
    view:{
        width:'100%',
        paddingVertical: 10,
        paddingHorizontal: SIZES.padding,
        borderRadius: SIZES.borederRadius,
        elevation: 12,
        shadowColor: COLORS.shadow,
        shadowOffset: {width:2, height: 12},
        shadowRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLORS.secondary,
    },
    text: {
        ...FONTS.h2_semiBold,
        color: COLORS.primary,
    },
    checkbox:{
        height: 26,
        width: 26,
        borderRadius: 5,
        backgroundColor: COLORS.primary,
        marginRight: 15,

    },
})

export default function Card(props){
    return <View style={styles.view}>
        <CheckBox style={styles.checkbox}/>
        <Text style={styles.text}>{props.text}</Text>
    </View>
}