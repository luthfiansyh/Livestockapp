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
import KalenderPeternakan from '../../component/assets/icons/KalenderPeternakan';

const HomeScreen = (props) =>{


    const {navigation} = props;
    return(
      <View style={{flex:1, backgroundColor:'white'}}>
        <ScrollView style={{height:1}}>
          <Head/>
            <View style={{flex:1}}>
              {/* <View style={styles.container}>
                <View style={styles.row}>
                  <TouchableOpacity onPress={() => {alert("Kalkulator Hewan")}} style={styles.cardleft}>
                    <View style={styles.justify}>
                      <Kalkulator/>
                    </View>
                    <Text style={styles.text}>Kalkulator Hewan</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => {alert("Kontak Keswan")}} style={styles.cardright}>
                    <View style={styles.justify}>
                      <Keswan/>
                    </View>
                    <Text style={styles.text}>Kontak Veteriner</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.row}>
                  <TouchableOpacity onPress={() => {alert("Katalog Pejantan")}} style={styles.cardleft}>
                    <View style={styles.justify}>
                      <Katalog/>
                    </View>
                    <Text style={styles.text}>Katalog Pejantan</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => {alert("Kalender Peternakan")}} style={styles.cardright}>
                    <View style={styles.justify}>
                      <KalenderPeternakan/>
                    </View>
                    <Text style={styles.text}>Kalender Hewan</Text>
                  </TouchableOpacity>
                  <View style={{width: 156, height: 72, marginRight: 12, marginTop: 24}}></View>
                </View>
              </View> */}
            </View>
            <View style={styles.container}>
              <View style={styles.row}>
                <View style={{alignItems:'center'}}>
                  <TouchableOpacity
                  onPress={() => {navigation.navigate('CardTest')}}
                  >
                  <Kalkulator/>
                </TouchableOpacity>
                <Text style={styles.buttontext}>Kalkulator Hewan</Text>
                </View>
                <View style={{alignItems:'center'}}>
                  <TouchableOpacity
                  onPress={() => {navigation.navigate('KontakKeswan')}}
                  >
                  <Keswan/>
                </TouchableOpacity>
                <Text style={styles.buttontext}>Kontak Veteriner</Text>
                </View>
                <View style={{alignItems:'center'}}>
                  <TouchableOpacity
                  onPress={() => {navigation.navigate('KatalogPejantan')}}
                  >
                  <Katalog/>
                </TouchableOpacity>
                <Text style={styles.buttontext}>Katalog Pejantan</Text>
                </View>
                <View style={{alignItems:'center'}}>
                  <TouchableOpacity
                  onPress={() => {alert("Kalender Peternakan")}}
                  >
                  <KalenderPeternakan/>
                </TouchableOpacity>
                <Text style={styles.buttontext}>Kalender Hewan</Text>
                </View>
              </View>
            </View>
            <View>

            </View>
          <ThumbnailArtikel/>
          <View style={{marginBottom: 24}}></View>
          <ThumbnailArtikel/>
          <View style={{marginBottom: 72}}></View>

        </ScrollView>
      </View>
    )
}

const styles = StyleSheet.create({
  container:{
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginVertical: 36
  },
  row:{
    flexDirection: 'row',
    justifyContent: 'space-around' 
  },
  buttontext:{
    fontFamily:'Mulish-SemiBold',
    fontSize: 10,
    textAlign:'center',
    width: 56,
    marginTop: 4,
    color:'#565656'
  }
})

export default HomeScreen;