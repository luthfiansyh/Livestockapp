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
import BgHome from './assets/illustrations/BgHome';

const Head = () => {
  return(
    <View style={{flex:1, backgroundColor: '#DCEAFF', flexDirection: 'column', justifyContent: 'space-between', height: "40%", paddingTop: 54}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        </View>
        <BgHome/>
      <View style={{paddingBottom: 12, paddingLeft: 12, backgroundColor:"#57B860"}}>
        <Text style={{fontSize: 28, color: 'white', fontWeight: "800"}}>Halo,</Text>
        <Text style={{fontSize: 28, color: 'white', fontWeight: "800"}}>Luthfiansyah</Text>
      </View>
    </View>
  )
}

export default Head;