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

const Head = () => {
  return(
    <View style={{flex:1, backgroundColor: '#57B860', flexDirection: 'column', justifyContent: 'space-between', height: 184}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={{width: 42, height: 42, backgroundColor:'white', borderRadius: 100, marginLeft: 12, marginTop: 12}}>
        </View>
          <View style={{width: 24, height: 24, marginRight: 12, marginTop: 12}}>
            <Icon name="notifications-button" group="material-design" height="24" width="24" color="white" />
          </View>
        </View>
      <View style={{marginBottom: 12, marginLeft: 12}}>
        <Text style={{fontSize: 28, color: 'white', fontWeight: "800"}}>Halo,</Text>
        <Text style={{fontSize: 28, color: 'white', fontWeight: "800"}}>Luthfiansyah</Text>
      </View>
    </View>
  )
}

export default Head;