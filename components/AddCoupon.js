import * as React from 'react';
import { StyleSheet, View, Button} from 'react-native';

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
    borderRadius: 42,
    width: 235,
    height: 50,
    justifyContent: 'center',
    marginTop: 50,
  },
  addCoupon: {
    textAlign: 'center',
    marginVertical: 8,
    fontFamily: '',
    fontSize: 16,
  }
})