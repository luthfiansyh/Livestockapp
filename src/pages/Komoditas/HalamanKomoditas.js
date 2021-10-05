import React, { Component } from 'react';
import {View,Text, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import Icon from 'react-native-ico';
import CardKomoditas from '../../component/CardKomoditas.js';
import FloatingButton from '../../component/FloatingPlusButton.js';

import HeaderPage from '../../component/HeaderPage.js';
import Tombol from '../../component/Tombol';

const HalamanKomoditas = (props) =>{

    const {navigation} = props;


    return(
        <View  style={{flex:1}}>
            <HeaderPage/>
            <ScrollView>    
                <View style={{marginBottom:24}}></View>
                <CardKomoditas/>
                <CardKomoditas/>
                <CardKomoditas/>
                <CardKomoditas/>
                <View style={{marginBottom:84}}></View>
            </ScrollView>
            <View style={styles.fab}>
                <TouchableOpacity
                style={styles.touchable}
                onPress={() => {navigation.navigate('NavKomoditas')}}
                >
                    <Icon style={styles.icon} name="plus" group="ui-interface" color="white"/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    fab:{
        position: 'absolute',
        right: "4%",
        bottom: "10%",
    },
    touchable:{
        backgroundColor: "#57B860",
        opacity: 0.8,
        borderRadius: 100,
        width: 48,
        height: 48, 
    },
    icon:{
        margin:14
    }
})



export default HalamanKomoditas;