import { View, Text, StyleSheet, Pressable } from "react-native";

import React from "react";
const FristScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.eclipe}></View>
      <View style={styles.content}>
        <Text style={styles.textBody}>GROW </Text>
        <Text style={styles.textBody}>YOUR BUSINESS</Text>
        <Text style={styles.textFooter}>
          We will help you to grow your business using online server
        </Text>
      </View>

      <View style={styles.button}>
        <Pressable style={styles.bgButton}>
          <Text style={styles.text}>Login</Text>
        </Pressable>
        <Pressable style={styles.bgButton}>
          <Text style={styles.text}>Sing up</Text>
        </Pressable>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#7fe5fc",
  },
  eclipe: {
    marginLeft: 120,
    width: 140,
    height: 140,
    marginTop: 100,
    backgroundColor: "transparent",
    borderRadius: 80,
    borderWidth: 16,
    borderColor: "black",
  },
  content: {
    marginTop: 40,
    textAlign: "center",
  },
  textBody: {
    fontSize: 25,
    textAlign: "center",
    fontWeight: 'bold'

  },
  textFooter: {
    marginTop: 50,
    fontSize: 18,
    textAlign: "center",
    fontWeight: 'bold'
  },
  button: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 100,
  },
  bgButton: {
    width:119,
    height:48,
    alignItems:'center',
    justifyContent:'center',
    borderRadius: 10,
    backgroundColor: "#f3c000",
  },
  text:{
    fontSize: 25,
    textAlign: "center",
    fontWeight: 'bold'
  }
});
export default FristScreen;
