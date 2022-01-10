import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ScrollView,
    Modal,
    SafeAreaView,
    TextInput
} from "react-native";

import {Picker} from '@react-native-picker/picker';

import HeaderPage from '../../component/HeaderPage.js';
import BobotHewan from '../../component/modals/BobotHewan.js';
import JenisKelamin from '../../component/modals/JenisKelamin.js';
import JenisKomoditas from '../../component/modals/JenisKomoditas.js';
import RumpunSapi from '../../component/modals/RumpunSapi.js';
import UkuranBobot from '../../component/modals/UkuranBobot.js';
import HalamanBeranda from './HalamanBeranda.js';
import LingkarDada from '../../component/modals/LingkarDada';
import PanjangCm from '../../component/modals/PanjangCm.js';
import ArrowBackWhite from '../../component/assets/icons/ArrowBackWhite';

const KalkulatorBobot = (props) =>{

    const {navigation} = props;
    const [selectedLanguage, setSelectedLanguage] = React.useState();
    const [lingkardada, onChangeLingkarDada] = React.useState('');
    const [panjangbadan, onChangePanjangBadan] = React.useState('');

    return(
        <View style={{flex:1}}>
            <View style={style.container}>
                <TouchableOpacity 
                onPress={() => {navigation.goBack()}} 
                style={{paddingVertical:24, paddingLeft: 24}}>
                    <ArrowBackWhite/>
                </TouchableOpacity>
                <Text style={style.header}>Kalkulator Peternakan</Text>
                <View style={{height: 24, width:24, marginRight: 24, marginTop:16}}></View>
            </View>
            <ScrollView style={{backgroundColor:'white'}}>
                {/* <Text style={style.texttitle2}>Pilihan Jenis Kalkulator</Text>
                <View style={style.pickers}>
                    <Picker
                    selectedValue={selectedLanguage}
                    onValueChange={(itemValue, itemIndex) => setSelectedLanguage(itemValue)}
                    mode="dialog"
                    >
                        <Picker.Item label="Prediksi Bobot Sapi" value="Bobot" color="black"/>
                        <Picker.Item label="Umur Hewan" value="Umur" color="black"  />
                    </Picker>
                </View> */}
                <View style={{marginTop: 24, backgroundColor:'pink'}}></View>
                <Text style={style.judul}>Lingkar Dada (cm2) </Text>
                <View style={style.form}>
                    <TextInput
                        style={style.textinput}
                        keyboardType='numeric'
                        underlineColorAndroid = "transparent"
                        placeholderTextColor="grey"
                        placeholder = "1"
                        onChangeText={onChangeLingkarDada}
                        value={lingkardada}
                    />
                </View>
                <Text style={style.judul}>Panjang badan (cm2) </Text>
                <View style={style.form}>
                    <TextInput
                        style={style.textinput}
                        keyboardType='numeric'
                        underlineColorAndroid = "transparent"
                        placeholderTextColor="grey"
                        placeholder = "1"
                        onChangeText={onChangePanjangBadan}
                        value={panjangbadan}
                    />
                </View>
                <View style={style.buttonbackground}>
                    <TouchableOpacity
                    style={style.button}
                    onPress={() => {alert('Cek hasil')}}
                    >
                        <Text style={style.buttontext}>HITUNG</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}

const style = StyleSheet.create({
    texttitle2:{
    marginTop: 36,
    fontSize: 14,
    fontFamily:'Mulish-SemiBold',
    textAlign:'center',
    color:'#565656'
    },
    pickers:{
        margin: 16,
        borderRadius: 8,
        borderColor: 'grey',
        borderWidth: 1,
    },
    container:{
        width:'100%',
        right: 0,
        top:0,
        height:64,
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'space-between',
        backgroundColor:'#57B860'
    },
    header:{
        marginTop:16,
        fontSize: 20,
        fontFamily: 'Mulish-Bold',
        color:'white',
        marginBottom:16
    },
    buttonbackground:{
        marginTop: "16%",
        bottom:'4%',
        flexDirection:"row",
        alignItems: 'flex-end',
        justifyContent:'space-between',
        marginHorizontal:16,
    },
    button:{
        justifyContent: 'space-around',
        width: "100%",
        height: 48,
        backgroundColor:'#57B860',
        borderRadius: 8
    },
    buttontext:{
        color:'white',
        textAlign:'center',
        fontSize: 16,
        fontFamily:'Mulish-Bold'
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
    form:{
        margin: 16,
        borderRadius: 8,
        borderColor: 'grey',
        borderWidth: 1,
        backgroundColor:'white',

    },
    }
)


export default KalkulatorBobot;