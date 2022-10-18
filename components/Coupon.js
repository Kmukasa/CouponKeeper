import * as React from 'react';
import { StyleSheet, View, Text, Image, Pressable} from 'react-native';

export default function Coupon(imgSrc, discount) {
  return (
    <Pressable style={styles.container} onPress={()=>{alert("here")}}>
        <Image
          style={styles.logoImage}
          source={require('../assets/McDonalds.png')} 
        />
        <View style={styles.dottedLine}></View>
        <View style={styles.discountContainer}>
          <Text style={styles.discount}>15% OFF</Text>
          <Text style={styles.brand}>McDonalds</Text>
          <Text style={styles.expirationDate}>21 November 2022</Text>
        </View>
        <View style={styles.circleLeft}></View>
        <View style={styles.circleRight}></View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flexDirection: "row",
    flexWrap: "wrap",
    // width: 342,
    // justifySelf: "center",

    alignSelf: "stretch",
    height: 104,
    backgroundColor: "#E7E7E7",
    borderRadius: 8,
    margin: 4,
    marginLeft: 15,
    marginRight: 15,

    // shadow styling
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  circleRight: {
    /* Ellipse 3 */
    position: "absolute",
    flexDirection: "row",
    width: 32,
    height: 32,
    direction: "rtl",
    alignSelf: "center",
    right: -14,
    backgroundColor: "rgba(0, 65, 101, 1)",
    borderRadius: 32 / 2,
  },
  circleLeft: {
    /* Ellipse 3 */
    position: "absolute",
    flexDirection: "row",
    width: 32,
    height: 32,
    left: -14,
    alignSelf: "center",
    direction: "ltr",
    backgroundColor: "rgba(0, 65, 101, 1)",
    borderRadius: 32 / 2,
  },
  dottedLine: {
    position: "absolute",
    width: 1,
    height: 85,
    left: 124,
    top: 8.55,
    borderWidth: 1,
    borderStyle: "dashed",
    borderColor: "rgba(102, 102, 102, 0.6)",
  },
  logoImage: {
    position: "absolute",
    width: 55,
    height: 50,
    left: 45,
    top: 28,
  },
  discountContainer:{
    position: "absolute",
    justifyContent: "space-evenly",
    width: 150,
    height: 80,
    left: 150,
    top: 12,
  },
  discount: {
    position: "relative",
    fontSize: 24,
    fontWeight: "bold",
  },
  brand: {
    position: "relative",
    fontSize: 16,
  },
  expirationDate: {
    marginTop: 8,
    marginBottom: 5,
    position: "relative",
    fontSize: 14,
    color: "rgba(0, 0, 0, 0.3)"
  }
});