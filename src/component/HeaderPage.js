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

const HeaderPage = () => {
    return(
        <View style={{height: 64, justifyContent: 'flex-start',flexDirection: 'row', alignItems: 'center', paddingBottom:16, justifyContent: 'space-between', backgroundColor:'#B7B7B7'}}>
            <View style={{height: 24, width:24, marginLeft: 24, marginTop:16}}>
                
            </View>
            <Text style={{marginTop:16, fontSize: 20, fontWeight: "600"}}>Header Page</Text>
            <View style={{height: 24, width:24, marginRight: 24, marginTop:16}}></View>
        </View>
    )
}

export default HeaderPage;