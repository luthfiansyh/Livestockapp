import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ScrollView,
} from "react-native";

import JenisKomoditas from '../../component/modals/JenisKomoditas.js';
import RumpunSapi from '../../component/modals/RumpunSapi.js';
import CloseIcon from '../../component/assets/icons/CloseIcon';
import { RadioButton } from 'react-native-paper';

const FilterKatalogPejantan = (props) =>{

    const {navigation} = props;
    const [checked, setChecked] = React.useState('first');

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
                <JenisKomoditas/>
                <RumpunSapi/>
                <View style={style.radio}>
                    <Text style={style.judul}>Urutkan</Text>
                    <View style={style.align}>
                        <RadioButton
                        value="first"
                        status={ checked === 'first' ? 'checked' : 'unchecked' }
                        onPress={() => setChecked('first')}
                        color="#57B860"
                        />
                        <Text>A - Z</Text>
                    </View>
                    <View style={style.align}>
                        <RadioButton
                        value="second"
                        status={ checked === 'second' ? 'checked' : 'unchecked' }
                        onPress={() => setChecked('second')}
                        color="#57B860"
                        />
                        <Text>Z - A</Text>          
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}


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
    align:{
    flexDirection:'row',
    alignItems:'center'
  },
  radio:{
    flexDirection:'column',
    justifyContent:'flex-start',
    marginHorizontal: 16
  },
  judul:{
      fontSize: 14
  }
    }
)


export default FilterKatalogPejantan;