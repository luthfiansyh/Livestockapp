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

const ThumbnailArtikel = () =>{
    return(
        <View style={{flex:1, marginTop: 24, marginBottom:24}}>
            <View style={{flexDirection:'row', justifyContent: 'space-between', paddingEnd: 24, alignItems: 'center', marginBottom: 12}}>
                <Text style={{fontSize:16, fontWeight: "600", paddingHorizontal: 24}}>Artikel Peternakan</Text>
                <Text style={{fontSize: 12}}>Lihat Selengkaapnya</Text>
            </View>
            <View>
                <ScrollView 
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={{backgroundColor:'white', flexDirection: 'row',  paddingStart: 12, paddingEnd:12}}>
                    <View style={{flex: 1, backgroundColor:'#B7B7B7', height:148, width:200, borderRadius: 8, marginEnd: 12}}>
                        <View style={{flex:0.5, backgroundColor:'#545454', borderTopLeftRadius:8, borderTopRightRadius: 8, paddingBottom:4}}></View>
                        <View style={{flex:0.5, justifyContent:'space-between'}}>
                            <Text style={{flex:1,fontSize:14, fontWeight: '700', marginTop: 4, paddingLeft: 8, color: '#545454'}}>Judul Judul Artikel Judul Artikel Artikel Judul Artikel...</Text>
                            <Text style={{flex:1,fontSize:10, paddingLeft: 8, color: '#545454'}}>Tanggal upload</Text>
                        </View>
                    </View>
                    <View style={{flex: 1, backgroundColor:'#B7B7B7', height:148, width:200, borderRadius: 8, marginEnd: 12}}>
                        <View style={{flex:0.5, backgroundColor:'#545454', borderTopLeftRadius:8, borderTopRightRadius: 8, paddingBottom:4}}></View>
                        <View style={{flex:0.5, justifyContent:'space-between'}}>
                            <Text style={{flex:1,fontSize:14, fontWeight: '700', marginTop: 4, paddingLeft: 8, color: '#545454'}}>Judul Judul Artikel Judul Artikel Artikel Judul Artikel...</Text>
                            <Text style={{flex:1,fontSize:10, paddingLeft: 8, color: '#545454'}}>Tanggal upload</Text>
                        </View>
                    </View>
                    <View style={{flex: 1, backgroundColor:'#B7B7B7', height:148, width:200, borderRadius: 8, marginEnd: 24}}>
                        <View style={{flex:0.5, backgroundColor:'#545454', borderTopLeftRadius:8, borderTopRightRadius: 8, paddingBottom:4}}></View>
                        <View style={{flex:0.5, justifyContent:'space-between'}}>
                            <Text style={{flex:1,fontSize:14, fontWeight: '700', marginTop: 4, paddingLeft: 8, color: '#545454'}}>Judul Judul Artikel Judul Artikel Artikel Judul Artikel...</Text>
                            <Text style={{flex:1,fontSize:10, paddingLeft: 8, color: '#545454'}}>Tanggal upload</Text>
                        </View>
                    </View>
                    
                </ScrollView>
            </View>
        </View>
    )
}

export default ThumbnailArtikel;