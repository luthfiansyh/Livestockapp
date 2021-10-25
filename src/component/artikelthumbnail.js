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

const ArtikelThumbnail = (props) =>{

    const {navigation} = props;

    return(
    <View>
        <View style={styles.card}>
            <View style={styles.imagethumbnail}></View>
            <View style={styles.justify}>
                <Text style={styles.title}>Judul Judul Artikel Judul Artikel Artikel Judul Artikel...</Text>
                <Text style={styles.update}>Tanggal upload</Text>
            </View>
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    scroll:{
        backgroundColor:'white', 
        flexDirection: 'row',  
        paddingStart:"4%",
        paddingEnd:"4%",
        backgroundColor:'pink', 
    },
    card:{
        flex: 1, backgroundColor:'#EDEDED', height:148, width:200, borderRadius: 8, marginEnd: 12
    },
    imagethumbnail:{
        flex:0.5, backgroundColor:'#C4C4C4', borderTopLeftRadius:8, borderTopRightRadius: 8, paddingBottom:4
    },
    justify:{
        flex:0.5, justifyContent:'space-between'
    },
    title:{
        flex:1,fontSize:14, fontWeight: '700', marginTop: 4, paddingLeft: 8, color: '#959595'
    },
    update:{
        flex:1,fontSize:10, paddingLeft: 8, color: '#959595'
    }
    
    
})

export default ArtikelThumbnail;