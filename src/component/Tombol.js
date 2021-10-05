import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import Icon from 'react-native-ico';

const Tombol = (props) => {

  const {navigation} = props;

  return(
    <View style={{flex:1}}>
      <View style={styles.container}>
        <View style={styles.row}>
          <TouchableOpacity onPress={() => {navigation.navigate('KalkulatorBobot')}} style={styles.cardleft}>
            <View style={styles.justify}>
              <Icon name="calculator" group="ui-interface" height="48" width="48" color="#545454" />
            </View>
              <Text style={styles.text}>Kalkulator Bobot Ideal</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {navigation.navigate('KalkulatorBobot')}} style={styles.cardright}>
            <View style={styles.justify}>
              <Icon name="doctor-suitcase-with-a-cross" group="universalicons" height="48" width="48" color="#545454" />
            </View>
              <Text style={styles.text}>Kontak Keswan/Veteriner</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <View style={styles.cardleft}>
            <View style={styles.justify}>
              <Icon name="scale" group="ui-interface" height="48" width="48" color="#545454" />
            </View>
              <Text style={styles.text}>Info Harga Hewan</Text>
            </View>
            <View View style={{width: 156, height: 72, marginRight: 12, marginTop: 24}}></View>
          </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },
  row:{
    flexDirection: 'row',
    justifyContent: 'space-around' 
  },
  cardleft:{
    width: 156,
    height: 72,
    marginLeft: 12,
    marginTop: 24,
    borderRadius: 4,
    backgroundColor:'white',
    borderWidth: 1,
    borderColor: '#BABABA',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    elevation: 5
  },
  cardright:{
    width: 156,
    height: 72, 
    marginRight: 12, 
    marginTop: 24,
    borderRadius: 4, 
    borderWidth: 1,
    borderColor: '#BABABA',
    backgroundColor:'white', 
    flexDirection: 'row', 
    justifyContent: 'space-evenly',
    elevation: 5
  },
  justify:{
    marginTop: 10,
    marginBottom: 8,
    width: 48,
    height: 48,
  },
  text:{
    marginTop: 8,
    marginBottom: 8,
    fontSize: 12,
    flex: 0.6,
    textAlignVertical:'center'
  }

})

export default Tombol;