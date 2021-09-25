import React from 'react';
import {
  Text,
  View,
  Pressable
} from 'react-native';

import Icon from 'react-native-ico-material-design';


const BottomNav = () =>{
  return(
    <View style={{height: 54, backgroundColor: '#CCC', flexDirection: 'row'}}>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center',}}>
        <View style={{width: 24, height: 24, backgroundColor: '#545454'}}>
          <Icon name="add-plus-button" height="24" width="24" />
        </View>
        <Text style={{fontSize: 10, color:'#545454', marginTop: 4}}>Beranda</Text>
      </View>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center',}}>
        <View style={{width: 24, height: 24, backgroundColor: '#545454'}}></View>
        <Text style={{fontSize: 10, color:'#545454', marginTop: 4}}>Komoditas</Text>
        </View>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center',}}>
        <View style={{width: 24, height: 24, backgroundColor: '#545454'}}></View>
        <Text style={{fontSize: 10, color:'#545454', marginTop: 4}}>Kalender</Text>
      </View>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center',}}>
        <View style={{width: 24, height: 24, backgroundColor: '#545454'}}></View>
        <Text style={{fontSize: 10, color:'#545454', marginTop: 4}}>Pengaturan</Text>
      </View>
    </View>
  )
}

export default BottomNav;