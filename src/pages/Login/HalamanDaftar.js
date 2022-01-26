import React, {useState} from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Platform,
  ToastAndroid,
  Alert,
  Modal
} from 'react-native';
import FirebaseUtil from "../../utils/FirebaseUtil";
import firestore from '@react-native-firebase/firestore';
import { RadioButton } from 'react-native-paper';
import ArrowBack from "../../component/assets/icons/ArrowBack";
import DateTimePicker from '@react-native-community/datetimepicker';
import CalendarIcon from "../../component/assets/icons/CalendarIcon";
import IconEye from "../../component/assets/icons/IconEye";

const HalamanDaftar = props => {
    const {navigation} = props;
    const [create, setCreate] = React.useState('');
    const [namapengguna, setNamaPengguna] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [hidePass, setHidePass] = React.useState(true);
    const [inputEmailOnFocus, setInputEmailOnFocus] = useState(false);
    const [inputPassOnFocus, setInputPassOnFocus] = useState(false);
    const [inputNameOnFocus, setInputNameOnFocus] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [userid, setUserId] = React.useState('');

    const signUp = () => {
      if(!email && !password){
          ToastAndroid.show("Data belum terisi semua", 3000);
          return;
       }
      if(password.length < 8){
          ToastAndroid.show("Password minimal 8 karakter", 3000);
          return;
       }
      if(password.length > 20){
          ToastAndroid.show("Password maksimal 20 karakter", 3000);
          return;
      }
      if(!password){
            ToastAndroid.show("Password tidak boleh kosong ", 3000);
            return;
       }
       if(!email){
            ToastAndroid.show("email tidak boleh kosong", 3000);
            return;
       }
       else{
            FirebaseUtil.signUp(email, password).catch((e) => {
            console.log(e);
            setModalVisible(!modalVisible)
            return;
      });
       }
     }
  
  return (
    <View>
      <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            
            >
                <View style={[[modal.centeredView, modalVisible ? {backgroundColor: 'rgba(0,0,0,0.5)'} : '']]}>
                    <View style={modal.modalview}>
                        <Text style={modal.title}>Terjadi Kesalahan..</Text>
                        <Text style={modal.information}>Email sudah terdaftar atau salah penulisan, silakan periksa ulang.</Text>
                          <TouchableOpacity 
                        style={modal.primarybutton}
                        onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text style={modal.textbutton}>Oke</Text>
                        </TouchableOpacity>
                        
                    </View>
                </View>

            </Modal>
      <View style={{padding:24, backgroundColor:'#fff'}}>
        <TouchableOpacity 
        onPress={() => {navigation.goBack()}} 
        >
          <ArrowBack/>
        </TouchableOpacity>
      </View>
      <ScrollView style={{backgroundColor:'white', height: '100%'}}>
      <View style={page.container}>
        <View style={page.downside}>
          <View style={page.upperside}>
            <Text style={page.title}>Halaman Daftar</Text>
            <Text style={page.text}>Masukan identitas Anda dengan benar agar kami dapat mengenal Anda lebih baik.</Text>
          </View>
        <Text style={form.texttitle}>Nama Pengguna</Text>
        <View style={[form.input, inputNameOnFocus && form.inputOnFocus]}>
          <TextInput
            style={form.textinput}
            underlineColorAndroid = "transparent"
            placeholder = "Masukkan Nama Anda"
            onChangeText={(itemValue, itemIndex) => setNamaPengguna(itemValue)}
            value={namapengguna}
            autoCapitalize = "words"
            maxLength={20}
            onFocus={() => {setInputNameOnFocus (true)}}
            onBlur={() => {setInputNameOnFocus (false)}}
          />
        </View>
        <Text style={form.texttitle}>Email</Text>
          <View style={[form.input, inputEmailOnFocus && form.inputOnFocus]}>
            <TextInput
              style={form.textinput}
              underlineColorAndroid = "transparent"
              placeholder = "Contoh: Budi@gmail.com"
              autoCapitalize = "none"
              onChangeText = {(itemValue, itemIndex) => setEmail(itemValue)}
              value={email}
              maxLength={30}
              onFocus={() => {setInputEmailOnFocus (true)}}
              onBlur={() => {setInputEmailOnFocus (false)}}
            />
          </View>
        <Text style={form.texttitle}>Password</Text>
        <View style={[form.input, inputPassOnFocus && form.inputOnFocus]}>
          <TextInput
              style={form.textinput}
              underlineColorAndroid = "transparent"
              secureTextEntry={ hidePass ? true : false}
              placeholder = "Masukkan Password"
              autoCapitalize = "none"
              onChangeText = {(itemValue, itemIndex) => setPassword(itemValue)}
              value={password}
              maxLength={20}
              onFocus={() => {setInputPassOnFocus (true)}}
              onBlur={() => {setInputPassOnFocus (false)}}
          />
          <TouchableOpacity
          onPress={() => setHidePass(!hidePass)}
          activeOpacity={1}
          style={form.iconeye}
          >
              <IconEye/>
          </TouchableOpacity>
        </View>
        {create ? (
              <></>
            ) : (
              <>
                <View style={page.buttonbackground}>
                  <TouchableOpacity style={page.button} onPress={() => {
                    signUp()
                  }}>
                    <Text style={page.buttontext}>Daftar</Text>
                  </TouchableOpacity>
                </View>
              </>
            )
            }
      </View>
    </View>
        <View style={{marginBottom:36}}></View>
    </ScrollView>
    </View>
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

const page = StyleSheet.create({
  align:{
    flexDirection:'row',
    alignItems:'center'
  },
  iconeye:{
    justifyContent:'center',
    marginRight: 8
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
    paddingHorizontal: 16,
  },
  textinput2:{
    paddingHorizontal: 16,
    paddingVertical: 16,
    color:'grey'
  },
  texttitle:{
    marginTop: 16,
    fontSize: 16,
    fontWeight: '600',
    marginBottom:"4%"
  },
  form:{
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#565656',
    flexDirection:'row',
    justifyContent:'space-between'
  },
  container:{
    backgroundColor:'#3F3D56',
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

export default HalamanDaftar;