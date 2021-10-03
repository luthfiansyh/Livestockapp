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

const HeaderPage = () => {
    return(
        <View style={styles.container}>
            <View style={styles.margins}>
            </View>
            <Text style={styles.Text}>Komoditas Saya</Text>
            <View style={styles.inside}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        height: 64,
        justifyContent: 'flex-start',
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom:16,
        justifyContent: 'space-between',
        backgroundColor:'#57B860'
    },
    margins:{
        height: 24,
        width:24,
        marginLeft: 24,
        marginTop:16
    },
    Text:{
        marginTop:16,
        fontSize: 20,
        fontWeight: "600",
        color:'white'
    },
    inside:{
        height: 24,
        width:24,
        marginRight: 24,
        marginTop:16
    }

})

export default HeaderPage;