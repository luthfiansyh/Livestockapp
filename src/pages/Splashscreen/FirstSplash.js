import React from "react";
import { StyleSheet, Text, View } from "react-native";

const FirstSplash = () => (
  <View style={page.container}>
    <View style={page.logo}>
        <Text style={page.text}>Logo here</Text>
    </View>
    <Text style={page.title}>Livestock App</Text>
  </View>
);

const page = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    alignItems: "center",
    justifyContent:'center',
  },
  text: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold"
  },
  title:{
      color:'#57B860',
      fontSize: 36,
      fontWeight:'bold'
  },
  logo:{
      backgroundColor:'#57B860',
      width: 240,
      height:172,
      justifyContent:'center',
      alignItems:'center',
      marginBottom: '10%'
  }
});

export default FirstSplash;