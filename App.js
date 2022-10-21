import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Alert, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Coupon from './components/Coupon';


export default function App() {
  const discount = {
    discountValue: "15% OFF",
    brand: "McDonalds",
    expirationDate: "November 11 2022",
  }
  return (
    <View style={styles.container}>
        <StatusBar
          style="light"
          hidden={false}
        />
        <Coupon 
          imgSrc={require('./assets/McDonalds.png')}
          {...discount}
          onPress={() => Alert.alert(
            'Alert Title',
            'alertMessage',
            [
              {text: 'Cancel', onPress: () => console.log('Cancel Pressed!')},
              {text: 'OK', onPress: this.onDeleteBTN},
            ],
            { cancelable: false }
          )}
        />
        <Coupon 
          imgSrc={require('./assets/McDonalds.png')}
          {...discount}
        />
        <Coupon 
          imgSrc={require('./assets/McDonalds.png')}
          {...discount}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 65, 101, 1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
