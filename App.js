import React, { useState } from "react";
import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import Header from "./components/header";
import Task from "./components/task";


export default function App() {

    const [task, setTask] = useState();
    const [taskItems, setTaskItems] = useState([]);

    const AddHandler = () => {
        Keyboard.dismiss()
        setTaskItems([...taskItems, task])
        setTask(null);
    }
    const DeleteHandler = (index) => {
        let itemsCopy = [...taskItems];
        itemsCopy.splice(index, 1);
        setTaskItems(itemsCopy);
    }
  return (
    <View style={styles.container}>
      {/* Today task's*/}
      <Header />
      <View style={styles.items}>
        {/* tasks place*/}
          {
              taskItems.map((item, index) => {
                  return (
                      <TouchableOpacity key={index} onPress={() => DeleteHandler(index)}>
                          <Task text={item}/>
                      </TouchableOpacity>
                      )
              })
          }

      </View>
        {/*task writer*/}
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.Keyboard}>
            <TextInput style={styles.input} placeholder={'Write a Task'} value={task} onChangeText={text => setTask(text)}/>
            <TouchableOpacity onPress={() => AddHandler()}>
                <View style={styles.addTask}>
                    <Text style={styles.addText}>+</Text>
                </View>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d1ebe8',
  },
  items: {
      marginTop: 20,
      paddingHorizontal: 15,
  },
    Keyboard:{
      position: 'absolute',
        bottom: 50,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: "center"
    },
    input: {
      paddingVertical: 15,
        paddingHorizontal: 15,
        width: 250,
        backgroundColor: '#FFF',
        borderRadius: 15,
        borderColor: '#C0C0C0',
        borderWidth: 1
    },
    addTask: {
      width: 60,
        height: 60,
        backgroundColor: "#FFF",
        borderRadius: 60,
        justifyContent: "center",
        alignItems: 'center',
        borderColor: '#C0C0C0',
        borderWidth: 1
    },
    addText: {

    }
});
