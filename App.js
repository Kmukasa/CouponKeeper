import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Alert, ScrollView, StyleSheet, Text, View} from 'react-native';
import Coupon from './components/Coupon';
import TopBar from './components/TopBar';


export default function App() {
  const discount = {
    discountValue: "15% OFF",
    brand: "McDonalds",
    expirationDate: "November 11 2022",
  }
  return (
    <View style={styles.container}>
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
      <StatusBar style="auto" />
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
