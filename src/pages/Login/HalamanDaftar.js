import React from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import Icon from "react-native-ico";
import { RadioButton } from 'react-native-paper';
import ArrowBack from "../../component/assets/icons/ArrowBack";

const HalamanDaftar = props => {
  const {navigation} = props;

  const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('')

     const handleEmail = (text) => {
        setEmail(text)
     }
     const handlePassword = (text) => {
        setPassword(text)
     }
     const login = (email, pass) => {
        alert('email: ' + email + ' password: ' + pass)
     }

     const [checked, setChecked] = React.useState('first');


  return (
    <View>
      <View>
        <TouchableOpacity 
        onPress={() => {navigation.goBack()}} 
        style={{padding:24, backgroundColor:'#fff'}}>
          <ArrowBack/>
        </TouchableOpacity>
      </View>
      <ScrollView style={{backgroundColor:'white'}}>
      <View style={page.container}>
        <View style={page.downside}>
          <View style={page.upperside}>
            <Text style={page.title}>HalamanDaftar</Text>
            <Text style={page.text}>Masukan identitas Anda dengan benar agar kami dapat mengenal Anda lebih baik.</Text>
          </View>
        <Text style={page.texttitle}>Nama Lengkap</Text>
        <View style={page.form}>
          <TextInput
            style={page.textinput}
            underlineColorAndroid = "transparent"
            placeholder = "Nama Lengkap Anda"
            autoCapitalize = "characters"
            onChangeText = {handleEmail}
          />
        </View>
        <Text style={page.texttitle}>Nama Panggilan</Text>
        <View style={page.form}>
          <TextInput
            style={page.textinput}
            underlineColorAndroid = "transparent"
            placeholder = "Nama Panggilan Anda"
            autoCapitalize = "none"
            onChangeText = {handlePassword}
          />
        </View>
        <Text style={page.texttitle}>Tanggal Lahir</Text>
        <View style={page.form}>
          <TextInput
            style={page.textinput}
            underlineColorAndroid = "transparent"
            placeholder = "Masukkan Tanggal Lahir Anda"
            autoCapitalize = "none"
            onChangeText = {handleEmail}
          />
        </View>
        <Text style={page.texttitle}>Nomor Telepon</Text>
        <View style={page.form}>
          <TextInput
            style={page.textinput}
            underlineColorAndroid = "transparent"
            placeholder = "+62"
            autoCapitalize = "none"
            onChangeText = {handleEmail}
          />
        </View>
        <Text style={page.texttitle}>Jenis Kelamin</Text>
        <View style={page.radio}>
          <View style={page.align}>
            <RadioButton
            value="first"
            status={ checked === 'first' ? 'checked' : 'unchecked' }
            onPress={() => setChecked('first')}
            color="#57B860"
            />
            <Text>Laki - Laki</Text>
          </View>
          <View style={page.align2}>
            <RadioButton
              value="second"
              status={ checked === 'second' ? 'checked' : 'unchecked' }
              onPress={() => setChecked('second')}
              color="#57B860"
            />
            <Text>Perempuan</Text>          
          </View>
        </View>
        <Text style={page.texttitle}>Alamat Rumah</Text>
        <View style={page.form}>
          <TextInput
            style={page.textinput}
            underlineColorAndroid = "transparent"
            placeholder = "Alamat Rumah Anda"
            autoCapitalize = "none"
            onChangeText = {handleEmail}
          />
        </View>
        <Text style={page.texttitle}>Upload Foto Profil</Text>
        <View style={page.form}>
          <TextInput
            style={page.textinput}
            underlineColorAndroid = "transparent"
            placeholder = "Alamat Rumah Anda"
            autoCapitalize = "none"
            onChangeText = {handleEmail}
          />
        </View>
        <View style={page.buttonbackground}>
          <TouchableOpacity style={page.button} onPress={() => {navigation.navigate('HalamanBeranda')}}>
            <Text style={page.buttontext}>Daftar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
        <View style={{marginBottom:36}}></View>
    </ScrollView>
    </View>
  )
}

const page = StyleSheet.create({
  align:{
    flexDirection:'row',
    alignItems:'center'
  },
  align2:{
    flexDirection:'row',
    alignItems:'center',
    marginLeft:'16%'
  },
  radio:{
    flexDirection:'row',
    justifyContent:'flex-start',
  },
  daftar:{
    color:'#57B860',
    fontWeight:'800',
    textDecorationLine: 'underline',
    fontSize:14
  },
  rowdaftar:{
    flexDirection:'row',
    justifyContent:'center',
    marginTop:'4%',
  },
  forgot:{
    marginLeft: 8,
    marginTop: 16,
    fontWeight: '600'
  },
  centerline:{
    justifyContent:'space-around',
    flexDirection:'row',
  },
  line:{
    width: "80%",
    height: 1,
    backgroundColor: 'grey',
    flexDirection: 'row',
    justifyContent: 'center',
    opacity: .5
  },
  textinput:{
    paddingHorizontal: 16
  },
  texttitle:{
    marginTop: 16,
    fontSize: 16,
    fontWeight: '600',
    marginBottom:"4%"
  },
  form:{
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#BBC8D4',
  },
  container:{
    backgroundColor:'#3F3D56'
  },
  upperside: {
    flex: 1,
    paddingHorizontal:0,
    paddingBottom:'4%',
    alignItems: "flex-start",
  },
  downside:{
    flex: 0.7,
    padding: 24,
    backgroundColor:'white',
  },
  paragraph:{
    color:'#4D4D4D',
    textAlign:'justify',
    fontSize: 16,
    fontWeight: "700",
    paddingVertical: 16
  },
  text: {
    color: "#3F3D56",
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
      color:'#3F3D56',
      fontSize: 24,
      fontWeight:'bold',
      textAlign:'center'
  },
  buttonbackground:{
    marginTop: "24%",
    flexDirection:"row",
    alignItems: 'flex-end',
    justifyContent:'space-between',
  },
  button:{
    justifyContent: 'space-around',
    width: "100%",
    height: 48,
    backgroundColor:'#57B860',
    borderTopEndRadius:8,
    borderBottomStartRadius:8,
    borderTopStartRadius:8,
    borderBottomEndRadius:8,
    right: "4%",
    bottom: "10%"
    
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

const style = StyleSheet.create({

});

export default HalamanDaftar;