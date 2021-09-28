import React, { Component } from 'react';
import {View,} from 'react-native';

import BottomNav from '../component/BottomNav.js';
import HeaderPage from '../component/HeaderPage.js';

const HalamanKomoditas = () =>{
    return(
        <View style={{flex:1}}>
            <HeaderPage/>
            <View style={{flex:1}}>
            </View>
            <BottomNav/>
        </View>
    )
}


export default HalamanKomoditas;