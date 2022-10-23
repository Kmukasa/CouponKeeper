import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, View} from 'react-native';
import Coupon from './components/Coupon';
import AddCoupon from './components/AddCoupon';
import TopBar from './components/TopBar';


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
        <TopBar/>
        <ScrollView style={styles.scrollView}>
          <Coupon 
            imgSrc={require('./assets/McDonalds.png')}
            {...discount}
          />
          <Coupon 
            imgSrc={require('./assets/McDonalds.png')}
            {...discount}
          />
          <Coupon 
            imgSrc={require('./assets/McDonalds.png')}
            {...discount}
          />
          <Coupon 
            imgSrc={require('./assets/McDonalds.png')}
            {...discount}
          />
          <Coupon 
            imgSrc={require('./assets/McDonalds.png')}
            {...discount}
          /> 
          <Coupon 
            imgSrc={require('./assets/McDonalds.png')}
            {...discount}
          />
          <Coupon 
            imgSrc={require('./assets/McDonalds.png')}
            {...discount}
          />
          <Coupon 
            imgSrc={require('./assets/McDonalds.png')}
            {...discount}
          /> 
        </ScrollView>
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
  scrollView: {
    flex: 1, 
    width: '100%',
    height: '65%', 
    position: 'absolute',
    paddingTop: 10,
    paddingBottom: 10,
  }
});
