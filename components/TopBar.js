import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function TopBar() {
    return(
        <View style={styles.container}>
            <Text style={styles.header}>My Coupons</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        position: 'absolute',
        flexDirection: "row",
        // justifyContent: "flex-start",
        // flexWrap: "wrap",
        flex: 1,
        backgroundColor: "grey",
        height: 100,
        top: 100,
        marginLeft: 15,
        marginRight: 15,
    },
    header: {
        fontSize: 24,
        color: "#ffff",
    },
    hamburger:{
        position: "absolute",
        width: 5,
        height: 1,
    }
});