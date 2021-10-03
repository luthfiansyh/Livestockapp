import React, { Component } from 'react';
import {View,Text} from 'react-native';

import HeaderPage from '../../component/HeaderPage.js';

const HalamanKomoditas = () =>{
    return(
        <View style={{flex:1}}>
            <Text>Halaman Komoditas</Text>
            <HeaderPage/>
            <View style={{flex:1}}>
            </View>
        </View>
    )
}


export default HalamanKomoditas;