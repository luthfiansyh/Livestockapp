import React, { Component, useContext } from 'react';
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
import { LoginContext } from '../utils/LoginProvider';


const Head = () => {
  
  const { user } = useContext(LoginContext);

  return(
    <View style={{flex:1, backgroundColor: '#cfebfd', flexDirection: 'column', justifyContent: 'space-between', height: "40%", paddingTop: 54}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        </View>
        <BgHome/>
      <View style={{paddingBottom: 12, paddingLeft: 12, backgroundColor:"#57B860"}}>
        <Text style={{fontSize: 28, color: 'white', fontFamily:'Mulish-Bold'}}>Halo,</Text>
        <Text style={{fontSize: 24, color: 'white', fontFamily: 'Mulish-Regular'}}>{user?.email}</Text>
      </View>
    </View>
  )
}

export default Head;