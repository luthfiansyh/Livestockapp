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
            Alert.alert("Komoditas Ditambahkan" ,"Berhasil menambahkan komoditas!",[{text: 'Tutup', onPress:() => navigation.navigate('HalamanKomoditas')}]);

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
            <View style={style.container}>
                <TouchableOpacity 
                onPress={() => {navigation.goBack()}} 
                style={{padding:24}}>
                    <ArrowBackWhite/>
                </TouchableOpacity>
                <Text style={style.header}>Tambah Komoditas</Text>
                <View style={{height: 24, width:24, marginRight: 24, marginTop:16}}></View>
            </View>
            <ScrollView>
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
                <View style={style.form}
                    >
                    <TextInput
                        
                        style={style.textinput}
                        underlineColorAndroid = "transparent"
                        placeholderTextColor="grey"
                        placeholder = "Alamat Peternakan"
                        multiline={true}
                        value={alamat}
                        onChangeText={(itemValue, itemIndex) => setAlamat(itemValue)}
                        maxLength={255}
                        autoCapitalize = "words"

                    />
                </View>
                <Text style={style.judul}>Luas Lahan (m2) </Text>
                <View style={style.form}>
                    <TextInput
                        style={style.textinput}
                        keyboardType='numeric'
                        underlineColorAndroid = "transparent"
                        placeholderTextColor="grey"
                        placeholder = "1"
                        onChangeText={(itemValue, itemIndex) => setLuasLahan(itemValue)}
                        value={luaslahan}
                    />
                </View>
                <Text style={style.judul}>Luas Lahan Digunakan (m2) </Text>
                <View style={style.form}>
                    <TextInput
                        style={style.textinput}
                        keyboardType='numeric'
                        underlineColorAndroid = "transparent"
                        placeholderTextColor="grey"
                        placeholder = "1"
                        onChangeText={(itemValue, itemIndex) => setLuasLahanDigunakan(itemValue)}
                        value={luaslahandigunakan}
                    />
                </View>
                {shouldShowSapi && shouldShowSimpan1 && shouldShowSimpan3 ? (
                    <View style={style.buttonbackground}>
                        <TouchableOpacity style={style.button} onPress={() => AddData()}>
                            <Text style={style.buttontext} >semuanya</Text>
                        </TouchableOpacity>
                    </View>
                )
                : null}
                {((shouldShowSapi || shouldShowKambing) && shouldShowSimpan1 && shouldShowSimpan3) || shouldShowSimpan3 ? (
                    <View style={style.buttonbackground}>
                        <TouchableOpacity style={style.button} onPress={() => AddData()}>
                            <Text style={style.buttontext} >Tambah Komoditas</Text>
                        </TouchableOpacity>
                    </View>
                )
                : null}
                { ((!shouldShowSapi || !shouldShowKambing) && !shouldShowSimpan1 && !shouldShowSimpan3) || !shouldShowSimpan3 ? (
                    <View style={style.buttonbackground}>
                        <View style={style.buttondisable}>
                            <Text style={style.buttontext} >Tambah Komoditas</Text>
                        </View>
                    </View>
                )
                : null}
                {/* <TouchableOpacity
                onPress={() => AddData()}
                >
                    <Text>Input data</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => setData()}
                >
                    <Text>Edit Data</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => removeData()}
                >
                    <Text>delete Data</Text>
            </TouchableOpacity> */}
            </ScrollView>
        </View>
    )
}


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
        marginBottom:16
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