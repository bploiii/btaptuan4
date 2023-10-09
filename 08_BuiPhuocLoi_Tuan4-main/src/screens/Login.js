import { LinearGradient } from "expo-linear-gradient";
import { View, Text, TextInput, Image, Pressable } from "react-native";
import React, {useState, useEffect} from 'react';
const Login = () => {
  const [input , setInput] = useState('TPHCM')
  return (
    <LinearGradient
      colors={["#FBCB00", "#BF9A00"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{ width: "100%", height: "100%" }}
    >
      <View style={{}}>
        <View style={{ marginTop: 100, marginLeft: 0 }}>
          <Text style={{ fontSize: 30, fontWeight: "bold" }}>Login</Text>
        </View>
        <View
          style={{
            marginTop: 100,
            marginLeft: 40,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              width: "80%",
              height: 40,
              borderWidth: 1,
              borderColor: "#fff",
            }}
          >
            <Image
              source={require("../../src/assets/avatar.png")}
              style={{ marginLeft: 10 }}
            />
            <TextInput
              placeholder="Name"
              style={{ marginLeft: 20, width: "60%" }}
              onChangeText={newText => setInput(newText)}
              defaultValue={input}
            ></TextInput>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              width: "80%",
              height: 40,
              borderWidth: 1,
              borderColor: "#fff",
              marginTop: 20,
            }}
          >
            <Image
              source={require("../../src/assets/lock.png")}
              style={{ marginLeft: 10 }}
            />
            <TextInput
              placeholder="Password"
              style={{ marginLeft: 20, width: "60%" }}
            ></TextInput>
            <Image
              source={require("../../src/assets/eye.png")}
              style={{ marginLeft: 10 }}
            />
          </View>
        </View>

        <View
          style={{
            marginTop: 50,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Pressable style={{ backgroundColor: "#fff", width: 300,height:45 ,alignItems:'center',justifyContent:'center' }}>
            <Text style={{ textAlign: "center" ,fontSize:20, fontWeight:'bold'}}>Login</Text>
          </Pressable>
        </View>
      </View>
      <View style={{ marginTop: 50 }}>
        <Text style={{textAlign:'center',fontSize:26,fontWeight:'bold'}}>Forgot your password?</Text>
      </View>
    </LinearGradient>
  );
};

export default Login;
