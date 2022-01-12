import React from 'react';

import {
  ScrollView,
  View,
  TouchableOpacity,
  Text,
  StyleSheet
} from 'react-native';
import Head from '../../component/Head.js';
import ThumbnailArtikel from '../../component/ThumbnailArtikel.js';
import Kalkulator from '../../component/assets/icons/Kalkulator';
import Keswan from '../../component/assets/icons/Keswan';
import Katalog from '../../component/assets/icons/Katalog';



const HalamanBeranda = (props) =>{
    const {navigation} = props;

    return(
      <View style={{flex:1, backgroundColor:'white'}}>
        <ScrollView style={{height:1}}>
          <Head/>
            <View style={{flex:1}}>
              <View style={styles.container}>
                <View style={styles.row}>
                  <TouchableOpacity onPress={() => alert('Kalkulaor')} style={styles.cardleft}>
                    <View style={styles.justify}>
                      <Kalkulator/>
                    </View>
                    <Text style={styles.text}>Kalkulator Bobot Ideal</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => {navigation.navigate('KontakKeswan')}} style={styles.cardright}>
                    <View style={styles.justify}>
                      <Keswan/>
                    </View>
                    <Text style={styles.text}>Kontak Keswan/Veteriner</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.row}>
                  <TouchableOpacity onPress={() => {navigation.navigate('KatalogPejantan')}} style={styles.cardleft}>
                    <View style={styles.justify}>
                      <Katalog/>
                    </View>
                    <Text style={styles.text}>Katalog Pejantan</Text>
                  </TouchableOpacity>
                  <View View style={{width: 156, height: 72, marginRight: 12, marginTop: 24}}></View>
                </View>
              </View>
            </View>
          <ThumbnailArtikel/>
        </ScrollView>
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
    marginVertical: 8,
    marginBottom: 8,
    width: 56,
    height: 56,
  },
  text:{
    marginTop: 8,
    marginBottom: 8,
    fontSize: 12,
    flex: 0.6,
    textAlignVertical:'center'
  }

})


export default HalamanBeranda;