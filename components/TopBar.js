import * as React from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';

export default function TopBar() {
    return(
        <View style={styles.container}>
            <Pressable style={styles.hamburgerContainer} onPress={()=>{ alert("clicked hamburger")}}>
                <View style={styles.hamburger}/>
                <View style={styles.hamburger}/>
                <View style={styles.hamburger}/>
            </Pressable>
            <Text style={styles.header}>My Coupons</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        position: 'absolute',
        flex: 1,
        width: '100%',
        bottom: '82%',
        paddingBottom: 10,
        marginBottom: 18,
        marginLeft: 18,
        marginRight: 18,
    },
    header: {
        fontSize: 24,
        color: "#ffff",
        alignSelf: 'center',
    },
    hamburgerContainer: {
        position: 'absolute',
        right: '86%',
        width: 30,
        height: 30,
        justifyContent: 'space-evenly',
    },
    hamburger:{
        position: "relative",
        width: 30,
        height: 2,
        backgroundColor: '#FFF',
        borderRadius: 3,
    }
});