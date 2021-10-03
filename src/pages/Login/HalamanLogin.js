import React from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import Inputs from "../../component/Inputs";



const HalamanLogin = props => {

  const {navigation} = props;  
  return (
    <ScrollView style={{backgroundColor:'white'}}>
      <View style={page.container}>
        <View style={page.upperside}>
          <Text style={page.title}>Selamat Datang,</Text>
          <Text style={page.text}>Senang melihat Anda Kembali. Silakan Masukkan Email dan Password.</Text>
        </View>
        <View style={page.downside}>
          <Text style={page.paragraph}>a</Text>
          <View style={{marginTop: 20}}/>
          <View style={page.buttonbackground}>
            <TouchableOpacity style={page.secondarybutton} onPress={() => {navigation.navigate('HalamanBeranda')}}>
              <Text style={{color:'#4D4D4D'}}>LEWATI</Text>
            </TouchableOpacity>
            <TouchableOpacity style={page.button} onPress={() => {navigation.navigate('HalamanBeranda')}}>
              <Text style={page.buttontext}>Masuk</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const page = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:'#3F3D56'
  },
  upperside: {
    flex: 1,
    padding:"8%",
    alignItems: "flex-start",
    justifyContent:'flex-start',
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
    fontWeight: "400",
    paddingEnd: "8%",
    marginTop: "4%"
  },
  buttontext:{
    color:'white',
    textAlign:'center',
    fontSize: 16,
    fontWeight:'800'
  },
  title:{
      paddingTop: "8%",
      color:'white',
      fontSize: 24,
      fontWeight:'bold',
      textAlign:'center',
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

export default HalamanLogin;