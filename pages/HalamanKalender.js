import React, { Component } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import BottomNav from '../component/BottomNav.js';
import HeaderPage from '../component/HeaderPage.js';

const HalamanKalender = () =>{
    return(
        <View style={{flex:1}}>
            <HeaderPage/>
            <View style={{flex:1}}></View>
            <BottomNav/>
        </View>
    )
}


export default HalamanKalender;