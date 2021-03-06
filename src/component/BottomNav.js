import React, { Component } from 'react';
import {
  Text,
  View,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-ico';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HeaderPage from './HeaderPage';

const BottomNav = (props) => {
  const {navigation} = props;
  return(
      <View style={{height: 54, backgroundColor: '#CCC', flexDirection: 'row'}}>
        <View style={{flex:1, alignItems: 'center', justifyContent:'center'}}>
          <TouchableOpacity style={{width: 24, height: 24}} onPress={() => {navigation.navigate('HalamanKalender')}}>
            <Icon Icon name="home" group="ui-interface" height="24" width="24" color="#545454" />
        </TouchableOpacity>
        <Text style={{fontSize: 10, color:'#545454', marginTop: 4}}>Beranda</Text>
      </View>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center',}}>
        <View style={{width: 24, height: 24}}>
          <Icon name="sheep" group="miscellaneous" height="24" width="24" color="#545454" />
        </View>
        <Text style={{fontSize: 10, color:'#545454', marginTop: 4}}>Komoditas</Text>
        </View>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center',}}>
        <View style={{width: 24, height: 24}} onPress={() => {navigation.navigate('HalamanBeranda')}}>
           <Icon name="calendar-daily-page-on-day-31" group="lodgicons" height="24" width="24" color="#545454" />
        </View>
        <Text style={{fontSize: 10, color:'#545454', marginTop: 4}}>Kalender</Text>
      </View>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center',}}>
        <View style={{width: 24, height: 24}}>
           <Icon name="settings" group="ui-interface" height="24" width="24" color="#545454" />
        </View>
        <Text style={{fontSize: 10, color:'#545454', marginTop: 4}}>Pengaturan</Text>
      </View>
    </View>
  )
  }



export default BottomNav;