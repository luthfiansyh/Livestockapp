import React from 'react';

import {
  ScrollView,
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  TouchableHighlight,
  Button,
  useState,
  useEffect
} from 'react-native';
import auth from '@react-native-firebase/auth';
import Head from '../../component/Head.js';
import ThumbnailArtikel from '../../component/ThumbnailArtikel.js';
import Kalkulator from '../../component/assets/icons/Kalkulator';
import Keswan from '../../component/assets/icons/Keswan';
import Katalog from '../../component/assets/icons/Katalog';
import ToDo from '../../component/assets/icons/ToDo';

const HomeScreen = (props) =>{


    const {navigation} = props;
    return(
      <View style={{flex:1, backgroundColor:'white'}}>
        <ScrollView style={{height:1}} showsVerticalScrollIndicator={false}>
            <View style={carousel.card}></View>
            <View style={styles.container}>
              <View style={styles.row}>
                <View style={{alignItems:'center'}}>
                  <TouchableOpacity
                  onPress={() => {navigation.navigate('KontakKeswan')}}
                  >
                  <Keswan/>
                </TouchableOpacity>
                <Text style={styles.buttontext}>Veteriner</Text>
                </View>
                <View style={{alignItems:'center'}}>
                  <TouchableOpacity
                  onPress={() => alert('Kalkulator')}
                  >
                  <Kalkulator/>
                </TouchableOpacity>
                <Text style={styles.buttontext}>Kalkulator</Text>
                </View>
                <View style={{alignItems:'center'}}>
                  <TouchableOpacity
                  onPress={() => {navigation.navigate('KatalogPejantan')}}
                  >
                  <Katalog/>
                </TouchableOpacity>
                <Text style={styles.buttontext}>Pejantan</Text>
                </View>
                <View style={{alignItems:'center'}}>
                  <TouchableOpacity
                  onPress={() => {alert("Kalender Peternakan")}}
                  >
                  <ToDo/>
                </TouchableOpacity>
                <Text style={styles.buttontext}>ToDo</Text>
                </View>
              </View>

            </View>
          <View style={{marginBottom: 64}}></View>
        </ScrollView>
      </View>
    )
}

const card = StyleSheet.create({
  row:{
    flexDirection:'row',
    justifyContent: 'center'
  },
  container:{
    height : 200,
    width: 180,
    backgroundColor:'cyan',
    margin: 8,
    marginVertical: 16,
    borderRadius: 16,
    elevation: 5
  },
  title:{
    fontFamily:'Mulish-Bold',
    fontSize: 16,
    paddingHorizontal: 18,
    color:'#656565'
  }
})

const styles = StyleSheet.create({
  container:{
    flexDirection: 'column',
    paddingVertical: '10%'
  },
  row:{
    flexDirection: 'row',
    justifyContent: 'space-around' 
  },
  buttontext:{
    fontFamily:'Mulish-Bold',
    fontSize: 12,
    textAlign:'center',
    width: 80,
    marginTop: 8,
    color:'#565656',
  }
})

const carousel = StyleSheet.create({
  card:{
    height: 200, margin: 16, borderRadius: 16, backgroundColor:'pink'
  }
})

export default HomeScreen;