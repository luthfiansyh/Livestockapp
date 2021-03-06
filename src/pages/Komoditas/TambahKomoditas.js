import React, { useState, useContext } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ScrollView,
    TextInput,
    Alert,
    ToastAndroid,
    Modal
} from "react-native";

import { RadioButton } from 'react-native-paper';

import ArrowBackWhite from '../../component/assets/icons/ArrowBackWhite';
import {Picker} from '@react-native-picker/picker';
import firestore from '@react-native-firebase/firestore';
import { LoginContext } from '../../utils/LoginProvider';
import CloseIcon from '../../component/assets/icons/CloseIcon';




const TambahKomoditas = (props) =>{
    
    const { user } = useContext(LoginContext);
    const {navigation} = props;
    const [jenis_komoditas, setJenisKomoditas] = React.useState();
    const [rumpun, setRumpun] = React.useState();
    const [klasifikasi, setKlasifikasi] = React.useState();
    const [alamat, setAlamat] = React.useState('');
    const [luaslahan, setLuasLahan] = React.useState('');
    const [luaslahandigunakan, setLuasLahanDigunakan] = React.useState('');
    const [checked, setChecked] = React.useState('first');
    const [shouldShowKambing, setShouldShowKambing] = React.useState(false);
    const [shouldShowSapi, setShouldShowSapi] = React.useState(false);
    const [shouldShowSimpan1, setShouldShowSimpan1] = React.useState(false);
    const [shouldShowSimpan2, setShouldShowSimpan2] = React.useState(false);
    const [shouldShowSimpan3, setShouldShowSimpan3] = React.useState(false);
    const [alamatonfocus, setAlamatOnFocus] = useState(false);
    const [luaslahanonfocus, setLuasLahanOnFocus] = useState(false);
    const [lahandigunakanonfocus, setLahanDigunakanOnFocus] = useState(false);
    const [modalVisible, setModalVisible] = React.useState(false);
    const [gobackModal, setGoBackModal] = React.useState(false);
    const [showcontainer, setShowContainer] = React.useState('');









    const AddData = () =>{
        if(!luaslahandigunakan || !luaslahan || !alamat || !rumpun || !klasifikasi){
            ToastAndroid.show("Data belum terisi semua", 3000);
            return;
        }
        if(!alamat){
            ToastAndroid.show("Alamat tidak boleh kosong", 3000);
            return;
        }
        if(!rumpun){
            ToastAndroid.show("Rumpun tidak boleh kosong", 3000);
            return;
        }
        if(!klasifikasi){
            ToastAndroid.show("Klasifikasi tidak boleh kosong", 3000);
            return;
        }
        if(!luaslahan){
            ToastAndroid.show("Luas Lahan belum terisi", 3000);
            return;
        }if(!luaslahandigunakan){
            ToastAndroid.show("Luas Lahan Digunakan belum terisi", 3000);
            return;
        }
        else{
            firestore()
            .collection('Komoditas')
            .add({
                jenis_komoditas: jenis_komoditas,
                rumpun_komoditas: rumpun,
                klasifikasi: klasifikasi,
                alamat: alamat,
                luaslahan: luaslahan,
                luaslahandigunakan: luaslahandigunakan,
                userID: user.uid,
            })
            console.log('Komoditas berhasil ditambahkan!');
            setShowContainer(jenis_komoditas);
            setModalVisible(!modalVisible);

        }
    }

    const setData = () =>{
        firestore()
        .collection('Komoditas')
        .doc('ExbqfwJlzvcwRdwnA1qZ') 
        .set({
            jenis_komoditas: 'Sapi',
            rumpun_komoditas: 'Belgian Blue 2',
            klasifikasi: 'Penggemukan 2',
        })
        .then(() => {
            console.log('Komoditas Berhasil di edit');
            alert('Edit', 'Komoditas berhasil diedit', 'tutup');
            navigation.navigate('HalamanKomoditas');
        });
    }

    const removeData = () =>{
        firestore()
        .collection('Komoditas')
        .doc('ExbqfwJlzvcwRdwnA1qZ')
        .delete()
        .then(() => {
            console.log('Komoditas berhasil dihapus!');
            alert('Komoditas berhasil dihapus');
            navigation.navigate('HalamanKomoditas');
        });
    }

    return(
        <View  style={{flex:1, backgroundColor:'#F9F9F9'}}>
            <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            
            >
                <View style={[[modal.centeredView, modalVisible ? {backgroundColor: 'rgba(0,0,0,0.5)'} : '']]}>
                    <View style={modal.modalview}>
                        <Text style={modal.title}>Komoditas ditambahkan</Text>
                        <Text style={modal.information}>Berhasil menambahkan komoditas!</Text>
                        <TouchableOpacity 
                        style={modal.primarybutton}
                        onPress={() => {

                            navigation.navigate('HalamanKomoditas');
                            setModalVisible(!modalVisible);
                        }}
                        >
                            <Text style={modal.textbutton}>Oke</Text>
                        </TouchableOpacity>
                        
                    </View>
                </View>

            </Modal>
            <Modal
            animationType="fade"
            transparent={true}
            visible={gobackModal}
        
            >
                <View style={[[modal.centeredView, gobackModal ? {backgroundColor: 'rgba(0,0,0,0.5)'} : '']]}>
                    <View style={modal.gobackview}>
                        <Text style={modal.title}>Keluar Halaman?</Text>
                        <Text style={modal.information}>Semua data yang Kamu masukkan tidak akan tersimpan.</Text>
                        <View style={{flexDirection: 'row', justifyContent:'space-between', width: '70%', alignSelf: "center"}}>
                            <TouchableOpacity 
                            style={modal.secondarybutton}
                            onPress={() => {
                                setGoBackModal(!gobackModal);
                            }}
                            >
                                <Text style={modal.canceltext}>Batal</Text>
                            </TouchableOpacity>
                            <TouchableOpacity 
                            style={modal.primarybutton}
                            onPress={() => {

                                navigation.goBack();
                                setGoBackModal(!gobackModal);
                            }}
                            >
                                <Text style={modal.textbutton}>Ya</Text>
                            </TouchableOpacity>
                        </View>  
                    </View>
                </View>

            </Modal>
            
            <View style={style.container}>
                <TouchableOpacity 
                onPress={() => 
                    setGoBackModal(!gobackModal)
                } 
                style={{padding:24}}>
                    <ArrowBackWhite/>
                </TouchableOpacity>
                <Text style={style.header}>Tambah Komoditas</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{marginTop: 24}}></View>
                <Text style={style.judul}>Jenis Komoditas</Text>
                <View style={style.form}>
                    <Picker
                    selectedValue={jenis_komoditas}
                    onValueChange={(itemValue, itemIndex) => {
                        if(jenis_komoditas == 'Sapi'){ 
                            setShouldShowKambing(!shouldShowKambing);
                            setShouldShowSapi(shouldShowSapi);

                        }if(jenis_komoditas == null){
                            setShouldShowSapi(!shouldShowSapi);
                        }
                        else
                        { 
                            setShouldShowKambing(!shouldShowKambing);
                            setShouldShowSapi(!shouldShowSapi);

                    }
                        setJenisKomoditas(itemValue);
                    }}
                    
                    mode="dialog"
                    style={style.picker}
                    >
                        <Picker.Item enabled={false} label="- Pilih Jenis Komoditas -" value="Pilih_JK" color="#565656" />
                        <Picker.Item label="Sapi" value="Sapi" color="#DDDDD"/>
                        <Picker.Item label="Domba/Kambing" value="Domba/Kambing" color="#DDDDD"/>
                    </Picker>
                </View>
                {shouldShowKambing ? (
                    <View>
                        <Text style={style.judul}>Rumpun Hewan</Text>
                        <View style={style.form}>
                            <Picker
                            selectedValue={rumpun}
                            onValueChange={(itemValue, itemIndex) => {
                                setRumpun(itemValue);
                                setShouldShowSimpan1(!shouldShowSimpan1);
                            }}
                            mode="dialog"
                            style={style.picker}>
                                <Picker.Item enabled={false} label="- Pilih Rumpun -" value="Pilih_R" color="#565656" />
                                <Picker.Item label="Marica" value="Marica" color="#DDDDD"/>
                                <Picker.Item label="Peranakan Etawah (PE)" value="PE" color="#DDDDD"/>
                                <Picker.Item label="Kacang" value="Kacang" color="#DDDDD"/>
                                <Picker.Item label="Saanen" value="Saanen" color="#DDDDD"/>
                                <Picker.Item label="Alpina" value="Alpina" color="#DDDDD"/>
                                <Picker.Item label="Boer" value="Boer" color="#DDDDD"/>
                                <Picker.Item label="Garut" value="Garut" color="#DDDDD"/>
                                <Picker.Item label="Palu" value="Palu" color="#DDDDD"/>
                            </Picker>
                        </View>
                    </View>

                ) : null }
                {shouldShowSapi ? (
                    <View>
                        <Text style={style.judul}>Rumpun Hewan</Text>
                        <View style={style.form}>
                            <Picker
                            selectedValue={rumpun}
                            onValueChange={(itemValue, itemIndex) => {
                                setRumpun(itemValue);
                                setRumpun(itemValue);
                                setShouldShowSimpan2(!shouldShowSimpan2);
                            }}
                            mode="dialog"
                            style={style.picker}>
                                <Picker.Item enabled={false} label="- Pilih Rumpun -" value="Pilih_R" color="#565656" />
                                <Picker.Item label="Brahman" value="Brahman" color="#DDDDD"/>
                                <Picker.Item label="Simmental" value="Simmental" color="#DDDDD"/>
                                <Picker.Item label="Limousin" value="Limousin" color="#DDDDD"/>
                                <Picker.Item label="Black Limousin" value="Black Limousin" color="#DDDDD"/>
                                <Picker.Item label="Wagyu" value="Wagyu" color="#DDDDD"/>
                                <Picker.Item label="Belgian Blue" value="Belgian Blue" color="#DDDDD"/>
                                <Picker.Item label="Madura" value="Madura" color="#DDDDD"/>
                                <Picker.Item label="Aceh" value="Aceh" color="#DDDDD"/>
                                <Picker.Item label="Bali" value="Bali" color="#DDDDD"/>
                                <Picker.Item label="Pasundan" value="Pasundan" color="#DDDDD"/>
                            </Picker>
                        </View>
                    </View>

                ) : null } 
                <Text style={style.judul}>Klasifikasi</Text>
                <View style={style.form}>
                    <Picker
                    selectedValue={klasifikasi}
                    onValueChange={(itemValue, itemIndex) => {
                        setKlasifikasi(itemValue);
                        setShouldShowSimpan3(!shouldShowSimpan3);
                    }}
                    mode="dialog"
                    style={style.picker}>
                        <Picker.Item enabled={false} label="- Pilih Klasifikasi -" value="Pilih_K" color="#565656" />
                        <Picker.Item label="Penggemukan" value="Penggemukan" color="#DDDDD"/>
                        <Picker.Item label="Potong" value="Potong" color="#DDDDD"/>
                        <Picker.Item label="Perah" value="Perah" color="#DDDDD"/>
                    </Picker>
                </View>
                <Text style={style.judul}>Alamat</Text>
                <View style={[form.input, alamatonfocus && form.inputOnFocus]}
                    >
                    <TextInput
                        
                        style={form.textinput}
                        underlineColorAndroid = "transparent"
                        placeholderTextColor="grey"
                        placeholder = "Alamat Peternakan"
                        multiline={false}
                        value={alamat}
                        onChangeText={(itemValue, itemIndex) => setAlamat(itemValue)}
                        maxLength={255}
                        autoCapitalize = "words"
                        onFocus={() => {setAlamatOnFocus (true)}}
                        onBlur={() => {setAlamatOnFocus (false)}}

                    />
                </View>
                <Text style={style.judul}>Luas Lahan (m2) </Text>
                <View  style={[form.input, luaslahanonfocus && form.inputOnFocus]}>
                    <TextInput
                        style={form.textinput}
                        keyboardType='numeric'
                        underlineColorAndroid = "transparent"
                        placeholderTextColor="grey"
                        placeholder = "1"
                        onChangeText={(itemValue, itemIndex) => setLuasLahan(itemValue)}
                        value={luaslahan} 
                        onFocus={() => {setLuasLahanOnFocus (true)}}
                        onBlur={() => {setLuasLahanOnFocus (false)}}
                    />
                </View>
                <Text style={style.judul}>Luas Lahan Digunakan (m2) </Text>
                <View style={[form.input, lahandigunakanonfocus && form.inputOnFocus]}>
                    <TextInput
                        style={form.textinput}
                        keyboardType='numeric'
                        underlineColorAndroid = "transparent"
                        placeholderTextColor="grey"
                        placeholder = "1"
                        onChangeText={(itemValue, itemIndex) => setLuasLahanDigunakan(itemValue)}
                        value={luaslahandigunakan}
                        onFocus={() => {setLahanDigunakanOnFocus (true)}}
                        onBlur={() => {setLahanDigunakanOnFocus (false)}}
                    />
                </View>
                {((shouldShowSapi || shouldShowKambing) && shouldShowSimpan1 && shouldShowSimpan3) || shouldShowSimpan3 ? (
                    <View style={style.buttonbackground}>
                        <TouchableOpacity style={style.button} onPress={() => AddData()}>
                            <Text style={style.buttontext} >Simpan</Text>
                        </TouchableOpacity>
                    </View>
                )
                : null}
                { ((!shouldShowSapi || !shouldShowKambing) && !shouldShowSimpan1 && !shouldShowSimpan3) || !shouldShowSimpan3 ? (
                    <View style={style.buttonbackground}>
                        <View style={style.buttondisable}>
                            <Text style={style.buttontext} >Simpan</Text>
                        </View>
                    </View>
                )
                : null}
            </ScrollView>
        </View>
    )
}

const form = StyleSheet.create({
  input: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#565656',
    flexDirection:'row',
    justifyContent:'space-between',
    backgroundColor:'#fff',
    margin: 16
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
    width: '100%'

  },
  texttitle:{
    marginTop: 16,
    fontSize: 16,
    marginBottom:"4%",
    fontFamily: 'Mulish-Bold',
    color:'#565656'
  },
})

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
        height:200,
        shadowColor: 'rgba(0,0,0,0.25)',
        elevation: 5,
        borderColor:'#C4C4C4',
        borderWidth: 1
    },
    primarybutton:{
        backgroundColor:'#57B860',
        alignItems:'center',
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 8,
        width: 84,
        alignSelf:'center',
    },
    gobackview:{
        flexDirection:'column',
        justifyContent:'space-around',
        backgroundColor: "#fff",
        borderRadius: 16,
        width:'80%',
        height: 200,
        shadowColor: 'rgba(0,0,0,0.25)',
        elevation: 5,
        borderColor:'#C4C4C4',
        borderWidth: 1
    },
    headerview:{
      flexDirection:'row',
      flex: 1, 
      justifyContent:'space-between', 
      alignItems:'center',
      margin: 16
    },
    secondarybutton:{
        alignItems:'center',
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 8,
        backgroundColor:'#F9F9F9',
        borderColor: '#B5B5B5',
        borderRadius: 8,
        borderWidth: 1,
        width: 84
    },
    textbutton:{
        fontFamily:'Mulish-Bold',
        color: '#fff',
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
        textAlign:'center',
        marginTop: 8
    },
    information:{
        fontFamily:'Mulish-Regular',
        fontSize: 14,
        color:'#656565',
        textAlign:'center',
        paddingHorizontal: 16

    }
})

const style = StyleSheet.create({
    container:{
        width:'100%',
        right: 0,
        top:0,
        height:64,
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'space-between',
        backgroundColor:'#57B860',
        
    },
    header:{
        marginTop:16,
        fontSize: 20,
        fontFamily:'Mulish-Bold',
        color:'white',
        marginBottom:16,
        flex: 1,
        textAlign:'center',
        marginRight: 72
    },
    buttonbackground:{
        marginTop: "12%",
        flexDirection:"row",
        alignItems: 'flex-end',
        justifyContent:'space-between',
        marginHorizontal:16,
        marginBottom: 24,
    },
    form:{
        margin: 16,
        borderRadius: 8,
        borderColor: 'grey',
        borderWidth: 1,
        backgroundColor:'white',

    },
    picker:{
        fontFamily:'Mulish-Regular',
    },
    textinput:{
        fontFamily:'Mulish-Regular',
        fontSize: 14,
        paddingHorizontal: 16,
    },
    judul:{
        fontSize:16,
        paddingHorizontal: 16,
        fontFamily:'Mulish-Bold',
        color:'#565656',
        marginTop: 16
    },
    button:{
        justifyContent: 'space-around',
        width: "100%",
        height: 48,
        backgroundColor:'#57B860',
        borderRadius: 8
    },
    buttondisable:{
        justifyContent: 'space-around',
        width: "100%",
        height: 48,
        backgroundColor:'#C4C4C4',
        borderRadius: 8
    },
    buttontext:{
        color:'white',
        textAlign:'center',
        fontSize: 16,
        fontFamily:'Mulish-Bold'
    },
    align:{
    flexDirection:'row',
    alignItems:'center'
    }

})

export default TambahKomoditas;