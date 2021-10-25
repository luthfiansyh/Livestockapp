import React from "react";
import {StyleSheet, Text, View, Button} from "react-native";
import LogoApp from "../../component/assets/LogoApp";

const FirstSplash = (props) => {
  const {navigation} = props;

  setTimeout(() => {
    navigation.navigate('SecondSplash')},3000);

  return(
  <View style={page.container}>
    <LogoApp/>
  </View>
  )
  };

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