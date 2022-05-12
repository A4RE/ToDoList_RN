import React from "react";
import { StyleSheet, Text, View,} from 'react-native';

export default function Header() {
    return (
        <View style={styles.main}>
            <Text style={styles.text}>Today's Tasks</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    main: {
        paddingTop: 50,
        paddingHorizontal: 15,
        borderBottomColor: 'black',
        borderBottomWidth: 0.5,
        borderBottomStartRadius: 15,
        borderBottomEndRadius: 15,
        opacity: 1,
    },
    text: {
        paddingBottom: 10,
        fontSize: 24,
        fontWeight: 'bold',
    }
});
