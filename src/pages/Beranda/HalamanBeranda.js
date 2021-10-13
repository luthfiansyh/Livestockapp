import React from 'react';

import {
  ScrollView,
  View,
  TouchableOpacity,
  Text,
  StyleSheet
} from 'react-native';
import Icon from 'react-native-ico';
import Tombol from '../../component/Tombol.js';
import Head from '../../component/Head.js';
import ThumbnailArtikel from '../../component/ThumbnailArtikel.js';


const HalamanBeranda = (props) =>{
    const {navigation} = props;

    return(
        <View style={{flex:1}}>
            <ScrollView style={{height:1}}>
                <Head/>
                <View style={{flex:1}}>
                    <View style={styles.container}>
                        <View style={styles.row}>
                        <TouchableOpacity onPress={() => {navigation.navigate('KalkulatorBobot')}} style={styles.cardleft}>
                            <View style={styles.justify}>
                            <Icon name="calculator" group="shopping" height="48" width="48" color="#57B860" />
                            </View>
                            <Text style={styles.text}>Kalkulator Bobot Ideal</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {navigation.navigate('KontakKeswan')}} style={styles.cardright}>
                            <View style={styles.justify}>
                            <Icon name="hostpital-building" group="font-awesome" height="48" width="48" color="#57B860" />
                            </View>
                            <Text style={styles.text}>Kontak Keswan/Veteriner</Text>
                        </TouchableOpacity>
                        </View>
                        <View style={styles.row}>
                        <TouchableOpacity onPress={() => {navigation.navigate('InfoHargaHewan')}} style={styles.cardleft}>
                            <View style={styles.justify}>
                            <Icon name="scale" group="ui-interface" height="48" width="48" color="#57B860" />
                            </View>
                            <Text style={styles.text}>Info Harga Hewan</Text>
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


export default HalamanBeranda;