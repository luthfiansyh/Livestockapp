import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ScrollView,
    Modal,
    SafeAreaView,
} from "react-native";

import PilihProvinsi from '../../component/modals/PilihProvinsi.js';
import PilihKabKot from '../../component/modals/PilihKabKot.js';
import CloseIcon from '../../component/assets/icons/CloseIcon';

const FilterKontakKeswan = (props) =>{

    const {navigation} = props;

    return(
        <View style={{flex:1, backgroundColor:'white'}}>
            <View style={style.container}>
                <TouchableOpacity 
                onPress={() => {navigation.goBack()}} 
                style={{padding:20}}>
                    <CloseIcon/>
                </TouchableOpacity>
                <TouchableOpacity 
                style={{marginRight:16, backgroundColor:'#57B860', padding:8, borderRadius:4}}
                onPress={() => {navigation.goBack()}} 
                >
                    <Text style={{color:'white', fontWeight:'600', fontSize:16, paddingHorizontal: 8}}>Cari</Text>
                </TouchableOpacity>
            </View>
            <ScrollView>
                <PilihProvinsi/>
                <PilihKabKot/>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 8,
  },
});

const style = StyleSheet.create({
    container:{
        width:'100%',
        right: 0,
        top:0,
        height:64,
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'space-between',
    },
    header:{
        marginTop:16,
        fontSize: 20,
        fontWeight: "600",
        color:'white',
        marginBottom:16
    },
    buttonbackground:{
        marginTop: "16%",
        bottom:'4%',
        flexDirection:"row",
        alignItems: 'flex-end',
        justifyContent:'space-between',
        marginHorizontal:16,
    },
    button:{
        justifyContent: 'space-around',
        width: "100%",
        height: 48,
        backgroundColor:'#57B860',
    },
    buttontext:{
        color:'white',
        textAlign:'center',
        fontSize: 16,
        fontWeight:'800'
    },
    }
)


export default FilterKontakKeswan;