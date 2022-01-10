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
        <View style={styles.container}>
            <View style={{}}>
                <Text style={styles.panduan}>Panduan</Text>
            </View>
            <View>
                <ScrollView 
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                // fadingEdgeLength={10}
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
    container:{
        flex:1, 
        marginTop: 24, 

    },
    scroll:{
        flexDirection: 'row',  
        paddingLeft: 8

    },
    panduan:{
        fontSize:16, 
        color:'#565656',
        flexDirection:'row', 
        justifyContent: 'space-between', 
        marginHorizontal: 16, 
        fontFamily:'Mulish-Bold'
    }
})

export default ThumbnailArtikel;