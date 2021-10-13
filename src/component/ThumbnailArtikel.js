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
import ArtikelThumbnail from './artikelthumbnail';

const ThumbnailArtikel = () =>{
    return(
        <View style={{flex:1, marginTop: 48, marginBottom:72}}>
            <View style={{flexDirection:'row', justifyContent: 'space-between', paddingEnd: 24, alignItems: 'center', marginBottom: 12}}>
                <Text style={{fontSize:16, fontWeight: "600", paddingHorizontal: 24}}>Artikel Peternakan</Text>
                <Text style={{fontSize: 12}}>Lihat Selengkapnya</Text>
            </View>
            <View>
                <ScrollView 
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={styles.scroll}>
                    <ArtikelThumbnail/>
                    <ArtikelThumbnail/>
                    <ArtikelThumbnail/>
                    <View style={{paddingRight:24}}></View>
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    scroll:{
        backgroundColor:'transparent', 
        flexDirection: 'row',  
        paddingStart:"4%",
        paddingEnd:"4%",
    },
    card:{
        flex: 1, backgroundColor:'#B7B7B7', height:148, width:200, borderRadius: 8, marginEnd: 12
    },
    imagethumbnail:{
        flex:0.5, backgroundColor:'#545454', borderTopLeftRadius:8, borderTopRightRadius: 8, paddingBottom:4
    },
    justify:{
        flex:0.5, justifyContent:'space-between'
    },
    title:{
        flex:1,fontSize:14, fontWeight: '700', marginTop: 4, paddingLeft: 8, color: '#545454'
    },
    update:{
        flex:1,fontSize:10, paddingLeft: 8, color: '#545454'
    }
    
    
})

export default ThumbnailArtikel;