import React from "react";
import { View, Text, StyleSheet, Pressable} from "react-native";
import { CheckBox } from 'react-native-web';
import { SIZES, FONTS, COLORS, SHADOW } from "../constants";

const styles = StyleSheet.create({
    view:{
        ...SHADOW,
        width:'100%',
        paddingVertical: 10,
        paddingHorizontal: SIZES.padding,
        borderRadius: SIZES.borederRadius,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLORS.secondary,
        marginBottom:15,
    },
    text: {
        ...FONTS.h1_semiBold,
        color: COLORS.primary,
    },
    checkbox:{
        height: 26,
        width: 26,
        borderRadius: 5,
        backgroundColor: COLORS.primary,
        marginRight: 15,

    },
    deleteButton: {
        marginLeft: 'auto', // Push the button to the right
    },
    deleteButtonText: {
        ...FONTS.h2_semiBold,
        color: COLORS.accent,
    },
})

export default function Card(props){
    return (
    <Pressable style={styles.view}>
        <CheckBox style={styles.checkbox}/>
        <Text style={styles.text}>{props.text}</Text>
        
        {/* Add delete button */}
        <Pressable style={styles.deleteButton} onPress={() => props.onDelete(props.text)}>
            <Text style={styles.deleteButtonText}>Delete</Text>
        </Pressable>
    </Pressable>)
}