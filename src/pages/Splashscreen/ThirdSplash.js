import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const ThirdSplash = () => (
  <View style={page.container}>
    <View style={page.upperside}>
        <Text style={page.text}>third splash</Text>
    </View>
    <View style={page.downside}>
        <Text style={page.paragraph}>Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet</Text>
        <View style={page.button}>
            <Text style={page.buttontext}>Selanjutnya</Text>
        </View>
    </View>
  </View>
);

const page = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:'#3F3D56'
  },
  upperside: {
    flex: 1,
    padding: 24,
    alignItems: "center",
    justifyContent:'center',
  },
  downside:{
    flex: 0.7,
    padding: 24,
    backgroundColor:'white',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24
  },
  paragraph:{
    color:'#4D4D4D',
    textAlign:'justify',
    backgroundColor:'pink',
    fontSize: 16,
    fontWeight: "700",
    paddingVertical: 16
  },
  text: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
  buttontext:{
    textAlign:'center',
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  title:{
      color:'#57B860',
      fontSize: 36,
      fontWeight:'bold',
      textAlign:'center'
  },
  button:{
    backgroundColor:'#57B860',
    width: 120,
    height: 42,
    borderTopEndRadius:8,
    borderBottomStartRadius:8,
    borderTopStartRadius:8,
    borderBottomEndRadius:8
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

export default ThirdSplash;