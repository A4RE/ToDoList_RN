import React from "react";
import { View, Text, StyleSheet} from "react-native";


const Task = (props) => {
    return(
        <View style={styles.item}>
            <View style={styles.leftItem}>
                <View style={styles.square}></View>
                <Text style={styles.text}>{props.text}</Text>
            </View>
            <View style={styles.circle}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#FFF',
        padding: 10,
        borderRadius: 12,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 10,
        borderColor: '#C0C0C0',
        borderWidth: 1
    },
    leftItem: {
        flexDirection: 'row',
        alignItems: "center",
        flexWrap: "wrap",

    },
    circle: {
        width: 14,
        height: 14,
        borderRadius: 7,
        borderColor: '#55BCF6',
        borderWidth: 2
    },
    square: {
        width: 20,
        height: 20,
        borderRadius: 6,
        backgroundColor: '#55BCF6',
        opacity: 0.4,
        marginRight: 15
    },
    text: {
        maxWidth: '80%'
    }
})


export default Task;
