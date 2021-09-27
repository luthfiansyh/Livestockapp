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
import HeaderPageWithBAck from '../component/HeaderPageWithBack';

const InfoHarga = () =>{
    return(
        <View style={{flex:1}}>
            <HeaderPageWithBAck/>
            <View style={{flex:1}}>
                
            </View>
            <BottomNav/>
        </View>
    )
}


export default InfoHarga;