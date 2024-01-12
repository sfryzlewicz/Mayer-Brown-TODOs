import React, {useState, useEffect} from "react";
import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    Platform,
    TextInput,
    TouchableOpacity,
    FlatList,
  } from "react-native";
import { Card } from "../components";
import { COLORS, SIZES, FONTS, SHADOW } from "../constants";

const styles = StyleSheet.create ({
        container:{
            //need to account for overflow
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
        searchBar: {
            ...SHADOW,
            borderRadius: SIZES.borederRadius,
            backgroundColor: COLORS.secondary,
            height: 54,
            paddingLeft: 15,
            color: COLORS.primary,
            width: "100%",
            ...FONTS.h2_semiBold,
            marginBottom: 10,
        },
})

export default function Homepage(){
    const [list, setList] = useState([]);
    const [userToDoInput, setUserToDoInput] = useState("");
    const [userSearchInput, setUserSearchInput] = useState("");
    const [filteredTasks, setFilteredTasks] = useState([]);

    // Function to add a task
    function addToDo(text) {
        const newTask = {
          id: Date.now(), // or use any unique identifier logic
          text,
          isChecked: false,
        };
        
        const sortedList = [...list, newTask].sort((a, b) => a.text.localeCompare(b.text));
        console.log("Added List", sortedList);
        setList(sortedList);
        setUserToDoInput("");
      }

    function handleKeyPress(event) {
        if (event.code === "Enter") {
          addToDo(userToDoInput);
        }
      }

    // Function to delete a task
    function deleteToDo(task) {
        setList((prev) => prev.filter((item) => item !== task));
    }

    // Function to toggle checkbox
    function toggleCheckbox(task) {
        setList((prev) =>
        prev.map((item) =>
            item.id === task.id ? { ...item, isChecked: !item.isChecked } : item
        )
        );
    }

    // Function to filter tasks based on search input
    useEffect(() => {console.log("LIST",list);
        const filtered = list.filter(
          (task) =>
            // Check if task is a string
            (task.text.toLowerCase().includes(userSearchInput.toLowerCase()))
        );
        setFilteredTasks(filtered);
      }, [userSearchInput, list]);
    
      console.log("Filter", filteredTasks)

    return(
        <>
        <View style={styles.container}>
            <Text style={{...FONTS.h1_semiBold, paddingBottom: 15, color:COLORS.accent, fontSize:30}}> Your To-Do List:</Text>
            
            {/* No recorded to-do tasks */}
            {(list.length==0) && <Text style={{...FONTS.h2_semiBold, color:COLORS.secondary, marginLeft:20}}>Please add a task you wish to complete below.</Text>}
            
            {/* To-do tasks exist*/}
            {(list.length>=1) && 
                <>
                    <TextInput
                    style={{...styles.searchBar, color:COLORS.shadow, height: 40}}
                    placeholder="Search tasks..."
                    onChangeText={(text) => setUserSearchInput(text)}
                    value={userSearchInput}
                    />
                    
                    <FlatList
                    style={{ flex: 1 }}
                    data={(userSearchInput.length >= 1) ? filteredTasks : list}
                    renderItem={({ item }) => (
                        <Card
                          text={item.text}
                          isChecked={item.isChecked}
                          onDelete={() => deleteToDo(item)}
                          onToggle={() => toggleCheckbox(item)}
                        />
                      )}
                    keyExtractor={(item, index) => index.toString()}/>
                </>
            }
            </View>

            <View style = {styles.textBoxWrapper}>
                <TextInput style={styles.textInput} placeholder="New Task" onChangeText={text => setUserToDoInput(text)} value={userToDoInput} onKeyPress={handleKeyPress}/>
                <TouchableOpacity style={styles.button} disabled={userToDoInput==""} onPress={()=>addToDo(userToDoInput)}>
                    <Text style={{...FONTS.h1_semiBold, color: COLORS.shadow, fontSize: 30,}}>+</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}