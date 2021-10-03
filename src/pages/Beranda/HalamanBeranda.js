import React from 'react';

import {
  ScrollView,
  View,
} from 'react-native';

import Tombol from '../../component/Tombol.js';
import Head from '../../component/Head.js';
import ThumbnailArtikel from '../../component/ThumbnailArtikel.js';
import react from 'react';

const HalamanBeranda = () =>{
    return(
        <View style={{flex:1}}>
            <ScrollView style={{height:1}}>
                <Head/>
                <Tombol/>
                <ThumbnailArtikel/>
            </ScrollView>
        </View>
    )
}


export default HalamanBeranda;