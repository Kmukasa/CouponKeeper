import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, View} from 'react-native';
import Coupon from './components/Coupon';
import AddCoupon from './components/AddCoupon';


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
        <AddCoupon/>
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
