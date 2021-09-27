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

import Icon from 'react-native-ico';

const Tombol = () => {
  return(
    <View style={{flex:1}}>
      <View style={{flex: 0.5, flexDirection: 'column', justifyContent: 'flex-start'}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <View style={{width: 156, height: 72, marginLeft: 12, marginTop: 24, borderRadius: 4, backgroundColor:'#B7B7B7', flexDirection: 'row', justifyContent: 'space-evenly'}}>
            <View style={{marginTop: 10, marginBottom: 8, width: 48, height: 48,}}>
              <Icon name="calculator" group="ui-interface" height="48" width="48" color="#545454" />
            </View>
              <Text style={{marginTop: 8, marginBottom: 8, fontSize: 14, flex: 0.6}}>Kalkulator Bobot Ideal</Text>
            </View>
            <View View style={{width: 156, height: 72, marginRight: 12, marginTop: 24, borderRadius: 4, backgroundColor:'#B7B7B7', flexDirection: 'row', justifyContent: 'space-evenly'}}>
              <View style={{marginTop: 10, marginBottom: 8, width: 48, height: 48}}>
                <Icon name="doctor-suitcase-with-a-cross" group="universalicons" height="48" width="48" color="#545454" />
              </View>
              <Text style={{marginTop: 8, marginBottom: 8, fontSize: 14, flex: 0.5}}>Kontak Keswan/Veteriner</Text>
            </View>
          </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <View style={{width: 156, height: 72, marginLeft: 12, marginTop: 24, borderRadius: 4, backgroundColor:'#B7B7B7', flexDirection: 'row', justifyContent: 'space-evenly'}}>
            <View style={{marginTop: 10, marginBottom: 8, width: 48, height: 48}}>
              <Icon name="scale" group="ui-interface" height="48" width="48" color="#545454" />
            </View>
              <Text style={{marginTop: 8, marginBottom: 8, fontSize: 14, flex: 0.5}}>Info Harga Hewan</Text>
            </View>
          <View View style={{width: 156, height: 72, marginRight: 12, marginTop: 24}}></View>
            </View>
          </View>
        </View>
  )
}

export default Tombol;