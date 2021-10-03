import React, { Component } from 'react';
import {View,Text} from 'react-native';
import FloatingButton from '../../component/FloatingPlusButton.js';

import HeaderPage from '../../component/HeaderPage.js';

const HalamanKomoditas = () =>{
    return(
        <View style={{flex:1}}>
            <HeaderPage/>
            <View style={{flex:1}}>
                <FloatingButton/>
            </View>
        </View>
    )
}


export default HalamanKomoditas;