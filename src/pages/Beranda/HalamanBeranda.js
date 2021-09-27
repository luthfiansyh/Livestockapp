import React, { Component } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity
} from 'react-native';

import Tombol from '../../component/Tombol.js';
import BottomNav from '../../component/BottomNav.js';
import Head from '../../component/Head.js';
import ThumbnailArtikel from '../../component/ThumbnailArtikel.js';
import HeaderPage from '../../component/HeaderPage.js';

const HalamanBeranda = () =>{
    return(
        <View style={{flex:1}}>
            <ScrollView style={{height:1}}>
                <Head/>
                <Tombol/>
                <ThumbnailArtikel/>
            </ScrollView>
            <BottomNav/>
        </View>
    )
}


export default HalamanBeranda;