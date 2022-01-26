import React, {useState} from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  ToastAndroid,
  Alert,
  Modal
} from 'react-native';
import FirebaseUtil from "../../utils/FirebaseUtil";
import IconEye from "../../component/assets/icons/IconEye";
import LoginBg from "../../component/assets/illustrations/LoginBg";



const LoginScreen = props => {

  const {navigation} = props;

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [hidePass, setHidePass] = React.useState(true);
  const [inputEmailOnFocus, setInputEmailOnFocus] = useState(false);
  const [inputPassOnFocus, setInputPassOnFocus] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);


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
       if(password.length < 8){
          ToastAndroid.show("Password minimal 8 karakter", 3000);
          return;
       }
       else{
            FirebaseUtil.signIn(email, password).catch((e) => {
            console.log(e);
            setModalVisible(!modalVisible);
          });
       }
       setLoading(true);
    };



  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            
            >
                <View style={[[modal.centeredView, modalVisible ? {backgroundColor: 'rgba(0,0,0,0.5)'} : '']]}>
                    <View style={modal.modalview}>
                        <Text style={modal.title}>Terjadi Kesalahan..</Text>
                        <Text style={modal.information}>Email atau password invalid. Silakan periksa ulang.</Text>
                          <TouchableOpacity 
                        style={modal.primarybutton}
                        onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text style={modal.textbutton}>Oke</Text>
                        </TouchableOpacity>
                        
                    </View>
                </View>

            </Modal>
        <View style={header.wrapjudul}>
          <Text style={header.judul}>Selamat Datang Kembali,</Text>
          <Text style={header.isijudul}>Masukkan email dan password untuk melanjutkan.</Text>
        </View>
        <View style={header.illustration}>
          <LoginBg/>
        </View>
          <View style={styles.downside}>
          <Text style={form.texttitle}>Email</Text>
          <View 
          style={[form.input, inputEmailOnFocus && form.inputOnFocus]}
          >
            <TextInput
              style={form.textinput}
              placeholderTextColor="grey"
              underlineColorAndroid = "transparent"
              placeholder = "Contoh: Budi@gmail.com"
              autoCapitalize = "none"
              onChangeText = {handleEmail}
              value={email}
              onFocus={() => {setInputEmailOnFocus (true)}}
              onBlur={() => {setInputEmailOnFocus (false)}}
            />
          </View>
          <Text style={form.texttitle}>Password</Text>
          <View
          style={[form.input, inputPassOnFocus && form.inputOnFocus]}
          >
            <TextInput
              style={form.textinput}
              placeholderTextColor="grey"
              underlineColorAndroid = "transparent"
              secureTextEntry={ hidePass ? true : false}
              placeholder = "Masukkan Password"
              autoCapitalize = "none"
              onChangeText = {handlePassword}
              value={password}
              onFocus={() => {setInputPassOnFocus (true)}}
              onBlur={() => {setInputPassOnFocus (false)}}
              on
            />
            <TouchableOpacity
          onPress={() => setHidePass(!hidePass)}
          activeOpacity={1}
          style={form.iconeye}
          >
              <IconEye/>
          </TouchableOpacity>
          </View>
          <Text style={styles.forgot}>Lupa Password?</Text>
          <View/>
            {create ? (
              <></>
            ) : (
              <>
                <View style={button.buttonbackground}>
                  <TouchableOpacity style={button.button} onPress={() => signIn()}>
                    <Text style={button.buttontext}>Masuk</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.centerline}>
                    <View style={styles.line}></View>
                  </View>
                  <View style={styles.rowdaftar}>
                    <Text style={styles.daftarleft}>Belum punya akun?</Text>
                    <Text style={styles.daftar} onPress={() => {navigation.navigate('SignUp')}}>Daftar</Text>
                  </View>
              </>
            )
            }
        </View>
      </View>
    </ScrollView>
  )
}

const modal = StyleSheet.create({
    centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
    },
    modalview:{
        flexDirection:'column',
        justifyContent:'space-around',
        backgroundColor: "#fff",
        borderRadius: 16,
        width:'85%',
        height:180,
        shadowColor: 'rgba(0,0,0,0.25)',
        elevation: 5,
        borderColor:'#C4C4C4',
        borderWidth: 1
    },
    primarybutton:{
        // backgroundColor:'#57B860',
        alignItems:'center',
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 8,
        width: 84,
        alignSelf:'flex-end',
        marginRight: 16
    },
    textbutton:{
        fontFamily:'Mulish-Bold',
        color: '#57B860',
        fontSize: 16,
    },
    canceltext:{
        fontFamily:'Mulish-Bold',
        color: '#656565',
        fontSize: 16
    },
    title:{
        fontFamily:'Mulish-Bold',
        fontSize: 20,
        color:'#3d3d3d',
        textAlign:'center',
        width: '100%',
        paddingHorizontal: 16,
        textAlign:'left',
        marginTop: 8
    },
    information:{
        fontFamily:'Mulish-Regular',
        fontSize: 14,
        color:'#656565',
        textAlign:'left',
        paddingHorizontal: 16

    }
})

const header = StyleSheet.create({
  illustration:{
    alignItems:'center',
    justifyContent:'center',
    marginTop: 24,
  },
  judul:{
    fontFamily:'Mulish-Bold',
    color: '#4d4d4d',
    fontSize: 24
  },
  isijudul:{
    fontSize: 16,
    fontFamily:'Mulish-Regular',
    marginTop: 8,
    color: '#4d4d4d',
    
  },
  wrapjudul:{
    marginHorizontal: 24,
    marginTop: 50,
    flexDirection:'column'
  },
})

const form = StyleSheet.create({
  input: {
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: '#565656',
    flexDirection:'row',
    justifyContent:'space-between',
    backgroundColor:'#F9F9F9'
      },
  inputOnFocus: {
    borderWidth: 1,
    borderColor: '#57B860', 
    backgroundColor:'#fff'
  },
  textinput:{
    paddingHorizontal: 16,
    fontFamily:'Mulish-Medium',
    color:'#565656',
    fontSize: 14,
    borderRadius: 8,
    width: '100%'
  },
  texttitle:{
    marginTop: 16,
    fontSize: 16,
    marginBottom:"4%",
    fontFamily: 'Mulish-Bold',
    color:'#565656'
  },
  iconeye:{
    justifyContent:'center',
    marginRight: 10,
    right: 36
  },
})

const button = StyleSheet.create({
  buttontext:{
      color:'white',
      textAlign:'center',
      fontSize: 16,
      fontWeight:'800',
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

})

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:'#F4F4F4',
  },
  downside:{
    paddingHorizontal: 24,
    paddingTop: 24,
    backgroundColor:'white',
    justifyContent:'center',
    paddingBottom: '8%',
    borderTopStartRadius: 24,
    borderTopEndRadius: 24,
    paddingBottom: 100
  },
  forgot:{
    marginLeft: 0,
    marginTop: 16,
    fontFamily: 'Mulish-Medium',
    fontSize: 12,
    color:'#565656',
    alignSelf:'flex-end'
  },
  centerline:{
    justifyContent:'space-around',
    flexDirection:'row',
    marginTop: 32
  },
  line:{
    width: "80%",
    height: 1,
    backgroundColor: '#565656',
    flexDirection: 'row',
    justifyContent: 'center',
    opacity: .5
  },
  rowdaftar:{
    flexDirection:'row',
    justifyContent:'center',
    marginTop:'4%',
  },
  daftar:{
    color:'#57B860',
    textDecorationLine: 'underline',
    fontSize:14,
    fontFamily: 'Mulish-Bold'
  },
  daftarleft:{
    color:'#565656',
    fontSize:14,
    fontFamily:'Mulish-SemiBold',
    marginRight: 8
  },
});

const container = StyleSheet.create({

})

export default LoginScreen;