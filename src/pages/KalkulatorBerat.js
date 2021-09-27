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

import HeaderPage from '../component/HeaderPage';
import BottomNav from '../component/BottomNav';

const KalkulatorBerat = () =>{
    return(
        <View style={{flex:1}}>
            <HeaderPage/>
            <View style={{flex:1}}>
                
            </View>
            <BottomNav/>
        </View>
    )
}


export default KalkulatorBerat;