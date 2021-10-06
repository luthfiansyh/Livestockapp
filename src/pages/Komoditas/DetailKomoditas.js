import React, { Component } from 'react';
import {View,Text, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import Icon from 'react-native-ico';
import CardKomoditas from '../../component/CardKomoditas.js';
import FloatingButton from '../../component/FloatingPlusButton.js';

import HeaderPage from '../../component/HeaderPage.js';
import Tombol from '../../component/Tombol';

const DetailKomoditas = (props) =>{

    const {navigation} = props;


    return(
        <View  style={{flex:1}}>
            <View style={style.container}>
                <TouchableOpacity 
                onPress={() => {navigation.goBack()}} 
                style={{padding:24}}>
                    <Icon name="go-back-left-arrow" group="material-design" color="#fff" size={24}/>
                </TouchableOpacity>
                <Text style={style.header}>Detail Komoditas</Text>
                <View style={style.icons}>
                    <TouchableOpacity 
                onPress={() => {navigation.goBack()}}
                style={style.margin}
                >
                    <Icon Icon name="edit" group="ui-interface" color="#fff" size={24}/>
                </TouchableOpacity>
                <TouchableOpacity 
                onPress={() => {navigation.goBack()}} 
                >
                    <Icon Icon name="trash" group="ui-interface" color="#fff" size={24}/>
                </TouchableOpacity>
                </View>
            </View>
            <Text>Detail Komoditas</Text>
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
        marginBottom:16,
    },
    icons:{
        flexDirection:'row',
        paddingRight:16,
    },
    margin:{
        marginRight:16
    }
})



export default DetailKomoditas;