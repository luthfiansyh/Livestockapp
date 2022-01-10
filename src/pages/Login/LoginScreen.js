import React from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Button,
  ToastAndroid
} from 'react-native';
import BgHome from "../../component/assets/illustrations/BgHome";
import BgLogin from "../../component/assets/illustrations/BgLogin";
import FirebaseUtil from "../../utils/FirebaseUtil";


const LoginScreen = props => {

  const {navigation} = props;

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [loading, setLoading] = React.useState(false);

     const handleEmail = (text) => {
        setEmail(text)
     }
     const handlePassword = (text) => {
        setPassword(text)
     }

      const [create, setCreate] = React.useState('')

     const signIn = () => {
       if(!email){
            ToastAndroid.show("Email tidak boleh kosong", 3000);
            return;
       }
       if(!password){
            ToastAndroid.show("password tidak boleh kosong", 3000);
            return;
       }
       else{
            FirebaseUtil.signIn(email, password).catch((e) => {
            console.log(e);
            alert('Email atau password invalid. Silakan cek kembali');
          });
       }
       setLoading(true);
    };



  return (
    <ScrollView style={{backgroundColor:'white'}}>
      <View style={page.container}>
        <View style={page.upperside}>
          <Text style={page.title}>Selamat Datang,</Text>
          <Text style={page.text}>Senang melihat Anda Kembali. Silakan Masukkan Email dan Password.</Text>
        </View>
        <BgLogin></BgLogin>
        <View style={{backgroundColor:'#57B860'}}>
          <View style={page.downside}>
          <View style={{marginTop:1}}></View>
          <Text style={page.texttitle}>Email</Text>
          <View style={page.form}>
            <TextInput
              style={page.textinput}
              placeholderTextColor="grey"
              underlineColorAndroid = "transparent"
              placeholder = "Contoh: Budi@gmail.com"
              autoCapitalize = "none"
              onChangeText = {handleEmail}
              value={email}
            />
          </View>
          <Text style={page.texttitle}>Password</Text>
          <View style={page.form}>
            <TextInput
              style={page.textinput}
              placeholderTextColor="grey"
              underlineColorAndroid = "transparent"
              secureTextEntry={true}
              placeholder = "Masukkan Password"
              autoCapitalize = "none"
              onChangeText = {handlePassword}
              value={password}
            />
          </View>
          {/* <Text style={page.forgot}>Lupa Password?</Text> */}
          <View/>
            {create ? (
              <></>
            ) : (
              <>
                <View style={page.buttonbackground}>
                  <TouchableOpacity style={page.button} onPress={() => signIn()}>
                    <Text style={page.buttontext}>Masuk</Text>
                  </TouchableOpacity>
                </View>
                <View style={page.centerline}>
                    <View style={page.line}></View>
                  </View>
                  <View style={page.rowdaftar}>
                    <Text style={{marginRight:8}}>Belum punya akun?</Text>
                    <Text style={page.daftar} onPress={() => {navigation.navigate('SignUp')}}>Daftar</Text>
                  </View>
              </>
            )
            }
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
    marginTop: 32
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
    paddingHorizontal: 16,
    fontFamily:'Mulish-Medium',
    color:'#565656',
    fontSize: 14
  },
  texttitle:{
    marginTop: 16,
    fontSize: 16,
    marginBottom:"4%",
    fontFamily: 'Mulish-Bold',
    color:'#565656'
  },
  form:{
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#565656',
  },
  container:{
    flex: 1,
    backgroundColor:'#cfebfd'
  },
  upperside: {
    paddingHorizontal:"8%",
    alignItems: "flex-start",
    justifyContent:'flex-start',
  },
  downside:{
    paddingHorizontal: 24,
    paddingTop: 24,
    backgroundColor:'white',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    justifyContent:'center',
    paddingBottom: '8%'
  },
  text: {
    color: "#4D4D4D",
    fontSize: 18,
    fontWeight: "400",
    paddingEnd: "0%",
    marginTop: "4%",
    fontFamily:'Mulish-Regular'
  },
  buttontext:{
    color:'white',
    textAlign:'center',
    fontSize: 16,
    fontWeight:'800',
    fontFamily:'Mulish-Bold'
  },
  title:{
      paddingTop: "8%",
      color:'#4D4D4D',
      fontSize: 32,
      textAlign:'center',
      fontFamily:'Mulish-Bold'
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

export default LoginScreen;