import React from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Platform,
  ToastAndroid,
  Alert
} from 'react-native';
import FirebaseUtil from "../../utils/FirebaseUtil";
import firestore from '@react-native-firebase/firestore';
import { RadioButton } from 'react-native-paper';
import ArrowBack from "../../component/assets/icons/ArrowBack";
import DateTimePicker from '@react-native-community/datetimepicker';
import CalendarIcon from "../../component/assets/icons/CalendarIcon";

const HalamanDaftar = props => {
    const {navigation} = props;

    const handleEmail = (text) => {
      setEmail(text)
    }

    const handlePassword = (text) => {
      setPassword(text)
    }

    const [date, setDate] = React.useState(new Date());
    const [mode, setMode] = React.useState('date');
    const [show, setShow] = React.useState(false);
    const [text, setText] = React.useState('DD/MM/YY');
      
      const onChange = (event, selectedDate) => {
      const currentDate = selectedDate || date;
      setShow(Platform.OS === 'ios');
      
      setDate(currentDate);

      let tempDate = new Date(currentDate);
      let fDate = tempdate.getDate() + '/' + (tempDate.getMonth() +1 ) + '/' + tempDate.getFullYear();
      setText(fDate)
      console.log(fDate)
    };

    const showMode = (currentMode) => {
      setShow(true);
      setMode(currentMode);
    };

    const [create, setCreate] = React.useState('');
    const [namapengguna, setNamaPengguna] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');


    let errorFlag = false;

    const signUp = () => {
      // firestore()
      //       .collection('User')
      //       .add({
      //           namapengguna: namapengguna,
      //           email: email,
      //           password: password
      // });
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
       }else{
            FirebaseUtil.signUp(email, password).catch((e) => {
            console.log(e);
            Alert.alert('Terjadi Kesalahan','Email sudah terdaftar atau salah penulisan, silakan periksa ulang.', [{text: 'OK'}] );
            return;
      });
       }
     }
  
  return (
    <View>
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
        <Text style={page.texttitle}>Nama Pengguna</Text>
        <View style={page.form}>
          <TextInput
            style={page.textinput}
            underlineColorAndroid = "transparent"
            placeholder = "Masukkan Nama Anda"
            onChangeText={(itemValue, itemIndex) => setNamaPengguna(itemValue)}
            value={namapengguna}
            autoCapitalize = "words"
            maxLength={20}
          />
        </View>
        <Text style={page.texttitle}>Email</Text>
          <View style={page.form}>
            <TextInput
              style={page.textinput}
              underlineColorAndroid = "transparent"
              placeholder = "Contoh: Budi@gmail.com"
              autoCapitalize = "none"
              onChangeText = {(itemValue, itemIndex) => setEmail(itemValue)}
              value={email}
              maxLength={30}
              
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
              onChangeText = {(itemValue, itemIndex) => setPassword(itemValue)}
              value={password}
              maxLength={20}

          />
        </View>
        {/* <Text style={page.texttitle}>Tanggal Lahir</Text>
        <View>
      <View style={page.form}>
        <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
        <Text style={page.textinput2}>{text}</Text>
            <TouchableOpacity onPress={() => showMode('date')} title="" style={{marginRight:8}}>
              <CalendarIcon/>
            </TouchableOpacity>
            {show && (
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={mode}
                is24Hour={true}
                display="spinner"
                onChange={onChange}
              />
            )}
      </View>
      </View>
    </View>
        <Text style={page.texttitle}>Nomor Telepon</Text>
        <View style={page.form}>
          <TextInput
            style={page.textinput}
            underlineColorAndroid = "transparent"
            placeholder = "Masukkan Nomor Telepon"
            autoCapitalize = "none"
            keyboardType="number-pad"
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
          <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
            <View style={page.textinput2}>
              <Text style={{color: 'grey'}}>Upload Foto</Text>
            </View>
          <TouchableOpacity style={{marginRight:8, backgroundColor:'#57B860', padding:8, borderRadius:4}}>
            <Text style={{color:'white', fontWeight:'600'}}>Upload</Text>
          </TouchableOpacity>
          </View>
        </View> */}
        {create ? (
              <></>
            ) : (
              <>
                <View style={page.buttonbackground}>
                  <TouchableOpacity style={page.button} onPress={() => signUp()}>
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