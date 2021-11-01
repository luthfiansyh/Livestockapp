import React from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput
} from 'react-native';
import Inputs from "../../component/Inputs";



const HalamanLogin = props => {

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

  return (
    <ScrollView style={{backgroundColor:'white'}}>
      <View style={page.container}>
        <View style={page.upperside}>
          <Text style={page.title}>Selamat Datang,</Text>
          <Text style={page.text}>Senang melihat Anda Kembali. Silakan Masukkan Email dan Password.</Text>
        </View>
        <View style={page.downside}>
          <View style={{marginTop:1}}></View>
          <Text style={page.texttitle}>Email</Text>
          <View style={page.form}>
            <TextInput
              style={page.textinput}
              underlineColorAndroid = "transparent"
              placeholder = "Contoh: Budi@gmail.com"
              autoCapitalize = "none"
              onChangeText = {handleEmail}
            />
          </View>
          <Text style={page.texttitle}>Password</Text>
          <View style={page.form}>
            <TextInput
              style={page.textinput}
              underlineColorAndroid = "transparent"
              secureTextEntry={true}
              placeholder = "Masukkan Password"
              autoCapitalize = "none"
              onChangeText = {handlePassword}
            />
          </View>
          <Text style={page.forgot}>Lupa Password?</Text>
          <View/>
          <View style={page.buttonbackground}>
            <TouchableOpacity style={page.button} onPress={() => {navigation.navigate('HalamanBeranda')}}>
              <Text style={page.buttontext}>Masuk</Text>
            </TouchableOpacity>
          </View>
          <View style={page.centerline}>
            <View style={page.line}>
          </View>
          </View>
          <View style={page.rowdaftar}>
            <Text style={{marginRight:8}}>Belum punya akun?</Text>
            <TouchableOpacity onPress={() => {navigation.navigate('HalamanDaftar')}}>
            <Text style={page.daftar}>Daftar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const page = StyleSheet.create({
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
    flex: 1,
    backgroundColor:'#75C97D'
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

export default HalamanLogin;