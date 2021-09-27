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

const HalamanPengaturan = () =>{
    return(
        <View style={{flex:1}}>
            <View style={{flex:1}}></View>
            <BottomNav/>
        </View>
    )
}


export default HalamanPengaturan;