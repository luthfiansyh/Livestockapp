import React from 'react';
import {
  Text,
  View,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-ico';

const KomoditasTab = (props) => {
  const {navigation} = props;
  return(
    <View style={{height: 54, backgroundColor: '#CCC', flexDirection: 'row'}}>
        <View style={{flex:1, alignItems: 'center', justifyContent:'center'}}>
            <TouchableOpacity style={{width: 24, height: 24}} onPress={() => {navigation.navigate('HalamanKalender')}}>
                <Icon name="sheep" group="miscellaneous" height="24" width="24" color="#545454" />
            </TouchableOpacity>
            <Text style={{fontSize: 10, color:'#545454', marginTop: 4}}>Komoditas</Text>
        </View>
    </View>
  )
  }



export default KomoditasTab;