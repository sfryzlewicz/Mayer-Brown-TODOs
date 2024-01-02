import React, {useState} from "react";
import {View, Text, StyleSheet, StatusBar, Platform, TextInput, TouchableOpacity, FlatList} from "react-native";
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
    const [list, setList] = useState([])
    const [userInput, setUserInput] = useState("")
    const list2 = []

    function addToDo(text){
        setList(prev=> {
            return [...prev, text]
        })
        setUserInput("")
    } 

    return(
        <View style={styles.container}>
            <Text style={{...FONTS.h1_semiBold, paddingBottom: 15, color:COLORS.accent, fontSize:30}}> Your To-Do List:</Text>
            {(list.length==0) && <Text style={{...FONTS.h2_semiBold, color:COLORS.secondary, marginLeft:20}}>Please add a task you wish to complete below.</Text>}
            {(list.length>=1) && <FlatList style={{flex:1}}
            data = {list}
            renderItem = {({item}) => <Card text={item}/> }
            keyExtractor={(item, index) => index.toString()}
            />}

            <View style = {styles.textBoxWrapper}>
                <TextInput style={styles.textInput} placeholder="New Task" onChangeText={text => setUserInput(text)} value={userInput}/>
                <TouchableOpacity style={styles.button} disabled={userInput==""} onPress={()=>addToDo(userInput)}>
                    <Text style={{...FONTS.h1_semiBold, color: COLORS.shadow, fontSize: 30,}}>+</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}