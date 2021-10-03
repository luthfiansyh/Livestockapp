import React, { Component } from 'react';
import {View,Text} from 'react-native';

import HeaderPage from '../../component/HeaderPage.js';

const HalamanPengaturan = () =>{
    return(
        <View style={{flex:1}}>
            <Text>Halaman Pengaturan</Text>
            <HeaderPage/>
            <View style={{flex:1}}>
            </View>
        </View>
    )
}


export default HalamanPengaturan;