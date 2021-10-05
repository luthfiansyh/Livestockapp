import React, { Component } from 'react';
import {View,Text, ScrollView} from 'react-native';

import HeaderPage from '../../component/HeaderPage.js';
import Head from '../../component/Head.js';

const HalamanPengaturan = () =>{
    return(
        <View style={{flex:0.6}}>
            <Head/>
            <View style={{flex:1}}>
                <ScrollView>

                </ScrollView>
            </View>
        </View>
    )
}


export default HalamanPengaturan;