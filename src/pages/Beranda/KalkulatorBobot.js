import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ScrollView,
    Modal,
    SafeAreaView,
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
                <Text style={style.texttitle2}>Pilihan Jenis Kalkulator</Text>
                <View style={style.pickers}>
                    <Picker
                    selectedValue={selectedLanguage}
                    onValueChange={(itemValue, itemIndex) => setSelectedLanguage(itemValue)}
                    >
                        <Picker.Item label="Prediksi Bobot Sapi" value="Bobot" color="black"/>
                        <Picker.Item label="Umur Hewan" value="Umur" color="black"/>
                    </Picker>
                </View>
                <LingkarDada/>
                <PanjangCm/>
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
    texttitle:{
    marginTop: 16,
    marginLeft: 16,
    fontSize: 16,
    fontWeight: '600',
    },
    texttitle2:{
    marginTop: 16,
    fontSize: 14,
    fontWeight: '600',
    textAlign:'center',
    color:'#959595'
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
        fontWeight: "600",
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
    },
    buttontext:{
        color:'white',
        textAlign:'center',
        fontSize: 16,
        fontWeight:'800'
    },
    }
)


export default KalkulatorBobot;