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

const TambahKomoditas = (props) =>{

    const {navigation} = props;
    return(
        <View  style={{flex:1}}>
            <View style={style.container}>
                <TouchableOpacity 
                onPress={() => {navigation.goBack()}} 
                style={{padding:24}}>
                    <Icon name="go-back-left-arrow" group="material-design" color="#fff" size={24}/>
                </TouchableOpacity>
                <Text style={style.header}>Tambah Komoditas</Text>
                <View style={{height: 24, width:24, marginRight: 24, marginTop:16}}></View>
            </View>
            <ScrollView>
                <View style={{marginTop:16}}></View>
                <JenisKomoditas/>
                <RumpunSapi/>
                <UselessTextInputMultiline/>
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
    }
})

export default TambahKomoditas;