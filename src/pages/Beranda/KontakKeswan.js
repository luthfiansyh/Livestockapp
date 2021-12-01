import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ScrollView,
    Modal,
    SafeAreaView,
    Checkbox
} from "react-native";
import Icon from 'react-native-ico';

import HeaderPage from '../../component/HeaderPage.js';
import BobotHewan from '../../component/modals/BobotHewan.js';
import JenisKelamin from '../../component/modals/JenisKelamin.js';
import JenisKomoditas from '../../component/modals/JenisKomoditas.js';
import RumpunSapi from '../../component/modals/RumpunSapi.js';
import UkuranBobot from '../../component/modals/UkuranBobot.js';
import HalamanBeranda from './HalamanBeranda.js';
import LingkarDada from '../../component/modals/LingkarDada';
import PanjangCm from '../../component/modals/PanjangCm.js';
import PilihProvinsi from '../../component/modals/PilihProvinsi.js';
import PilihKabKot from '../../component/modals/PilihKabKot.js';
import ArrowBackWhite from '../../component/assets/icons/ArrowBackWhite';
import IconFilter from '../../component/assets/icons/FilterIcon';

const KontakKeswan = (props) =>{

    const {navigation} = props;

    return(
        <View style={{flex:1, backgroundColor:'white'}}>
            <View style={style.container}>
                <TouchableOpacity 
                onPress={() => {navigation.goBack()}} 
                style={{padding:24}}>
                    <ArrowBackWhite/>
                </TouchableOpacity>
                <Text style={style.header}>Kontak Keswan/Veteriner</Text>
                {/* <View style={{height: 24, width:24, marginRight: 24, marginTop:16}}></View> */}
                <TouchableOpacity 
                onPress={() => {navigation.navigate('FilterKontakKeswan')}} 
                style={{padding:24}}>
                    <IconFilter/>
                </TouchableOpacity>
            </View>
            <ScrollView>
                <Text>p</Text>
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


export default KontakKeswan;