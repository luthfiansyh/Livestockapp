import React from "react";
import {StyleSheet, Text, View, Button} from "react-native";
import { TouchableOpacity } from "react-native";

const SecondSplash = (props) => {
  const {navigation} = props;

  return(
      <View style={page.container}>
        <View style={page.upperside}>
          <Text style={page.text}>illustration 1</Text>
        </View>
        <View style={page.downside}>
          <Text style={page.paragraph}>Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet</Text>
        <View style={page.buttonbackground}>
          <TouchableOpacity style={page.secondarybutton} onPress={() => {navigation.navigate('NavigationLogin')}}>
            <Text style={{color:'#4D4D4D'}}>LEWATI</Text>
          </TouchableOpacity>
          <TouchableOpacity style={page.button} onPress={() => {navigation.navigate('ThirdSplash')}}>
            <Text style={page.buttontext}>Selanjutnya</Text>
          </TouchableOpacity>
        </View>
    </View>
  </View>

  )
};

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
    borderTopRightRadius: 24,
  },
  paragraph:{
    color:'#4D4D4D',
    textAlign:'justify',
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
    color:'white',
    textAlign:'center',
    fontSize: 16,
    fontWeight:'800'
  },
  title:{
      color:'#57B860',
      fontSize: 36,
      fontWeight:'bold',
      textAlign:'center'
  },
  buttonbackground:{
    marginTop: 72,
    flexDirection:"row",
    justifyContent: 'flex-end',
    justifyContent:'space-between'
  },
  button:{
    justifyContent: 'space-around',
    width: 120,
    height: 42,
    backgroundColor:'#57B860',
    borderTopEndRadius:8,
    borderBottomStartRadius:8,
    borderTopStartRadius:8,
    borderBottomEndRadius:8
  },
  secondarybutton:{
    justifyContent: 'space-around',
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

export default SecondSplash;