import React from "react";
import {StyleSheet, Text, View} from "react-native";
import { TouchableOpacity } from "react-native";
import SplashImg1 from "../../component/assets/illustrations/SplashImg-1";

const SecondSplash = (props) => {
  const {navigation} = props;

  return(
      <View style={page.container}>
        <View style={page.upperside}>
          <SplashImg1/>
        </View>
        <View style={page.downside}>
          <Text style={page.paragraph}>Jadilah peternak modern! LivestockApp membantu Anda mewujudkan digitalisasi ekosistem peternakan sebagai upaya meningkatkan kualitas ternak Anda.</Text>
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
    backgroundColor:'#75C97D'
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
    justifyContent:'space-between'
  },
  paragraph:{
    color:'#3A3B3C',
    textAlign:'justify',
    fontSize: 14,
    fontWeight: "600",
    lineHeight: 24,
    marginTop: 36
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
    marginTop: 48,
    marginBottom: 48,
    flexDirection:"row",
    justifyContent: 'flex-end',
    justifyContent:'space-between',
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