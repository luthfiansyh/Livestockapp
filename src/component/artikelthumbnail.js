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
        <View style={styles.margin}>
            <View style={styles.card}>
                <View style={styles.justify}>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    margin:{
        margin: 8,
        backgroundColor:'blue'
    },
    card:{
        backgroundColor:'pink', 
        height:180,
        width:180, 
        borderRadius: 8, 
        marginHorizontal: 4,
        elevation: 8,
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