import React, { Component } from 'react';
import {View,Text} from 'react-native';

import HeaderPage from '../../component/HeaderPage.js';

const KalkulatorBobot = () =>{
    return(
        <View style={{flex:1}}>
            <Text>Halaman Kalkulator</Text>
            <HeaderPage/>
            <View style={{flex:1}}>
            </View>
        </View>
    )
}


export default KalkulatorBobot;