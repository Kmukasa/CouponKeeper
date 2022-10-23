import * as React from 'react';
import { StyleSheet, View, Button } from 'react-native';

export default function AddCoupon() {
  return (
      <View style={styles.container}>
        <Button color="#004165" title="Add Coupon" style={styles.addCoupon} />
      </View>

  )
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    backgroundColor: 'white',
    width: '100%',
    top: '40%',
    borderRadius: 42,
    width: 235,
    height: 50,
    justifyContent: 'center'
  },
  addCoupon: {
    textAlign: 'center',
    fontSize: 16,
    justifyContent: 'center',
    top: '100%',
  }
})