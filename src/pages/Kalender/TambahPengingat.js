import React, { Component } from 'react';
import {View,Text, StyleSheet, ScrollView} from 'react-native';

const TambahPengingat = (props) =>{

    const {navigation} = props;


    return(
        <View  style={{flex:1}}>
            <ScrollView>
                <Text>Halaman Form Tambah Pengingat</Text>
            </ScrollView>
        </View>
    )
}

export default TambahPengingat;