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

const Head = () => {
  return(
    <View style={{flex:1, backgroundColor: '#B7B7B7', flexDirection: 'column', justifyContent: 'space-between', height: 184}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={{width: 42, height: 42, backgroundColor:'#545454', borderRadius: 100, marginLeft: 12, marginTop: 12}}></View>
          <View style={{width: 24, height: 24, backgroundColor: '#545454', marginRight: 12, marginTop: 12}}></View>
        </View>
      <View style={{marginBottom: 12, marginLeft: 12}}>
        <Text style={{fontSize: 28, color: '#545454', fontWeight: "800"}}>Halo,</Text>
        <Text style={{fontSize: 28, color: '#545454', fontWeight: "800"}}>Luthfiansyah</Text>
      </View>
    </View>
  )
}

export default Head;