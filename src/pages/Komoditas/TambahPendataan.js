import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ScrollView,
    Modal,
    SafeAreaView
} from "react-native";
import Icon from 'react-native-ico';
import ModalPicker from '../../component/modalpicker/JenisKomoditasPicker';
import UselessTextInputMultiline from '../../component/modals/AlamatPeternakan';
import AlamatPeternakan from '../../component/modals/AlamatPeternakan';
import JenisKomoditas from '../../component/modals/JenisKomoditas';
import RumpunSapi from '../../component/modals/RumpunSapi';
import Klasifikasi from '../../component/modals/Klasifikasi';
import TextInputNamaHewan from '../../component/modals/NamaHewan';
import TextInputKodeHewan from '../../component/modals/KodeHewan';
import SistemPemeliharaan from '../../component/modals/SistemPemeliharaan';
import JenisKelamin from '../../component/modals/JenisKelamin';

const TambahPendataan = (props) =>{

    const {navigation} = props;
    return(
        <View  style={{flex:1}}>
            <View style={style.container}>
                <TouchableOpacity 
                onPress={() => {navigation.goBack()}} 
                style={{padding:24}}>
                    <Icon name="go-back-left-arrow" group="material-design" color="#fff" size={24}/>
                </TouchableOpacity>
                <Text style={style.header}>Tambah Pendataan Hewan</Text>
                <View style={{height: 24, width:24, marginRight: 24, marginTop:16}}></View>
            </View>
            <ScrollView>
                <View style={{marginTop:16}}></View>
                    <TextInputNamaHewan/>
                    <TextInputKodeHewan/>
                    <SistemPemeliharaan/>
                    <JenisKelamin/>
                    <View style={style.buttonbackground}>
                        <TouchableOpacity style={style.button} onPress={() => {navigation.navigate('HalamanKomoditas')}}>
                            <Text style={style.buttontext}>SIMPAN</Text>
                        </TouchableOpacity>
                    </View>
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
        texttitle:{
        marginTop: 16,
        fontSize: 16,
        fontWeight: '600',
        marginBottom:"4%"
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
        backgroundColor:'pink'
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
})

export default TambahPendataan;