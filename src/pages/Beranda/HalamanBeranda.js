import React from 'react';

import {
  ScrollView,
  View,
  TouchableOpacity,
  Text
} from 'react-native';
import Icon from 'react-native-ico';
import Tombol from '../../component/Tombol.js';
import Head from '../../component/Head.js';
import ThumbnailArtikel from '../../component/ThumbnailArtikel.js';


const HalamanBeranda = (props) =>{
    const {navigation} = props;

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