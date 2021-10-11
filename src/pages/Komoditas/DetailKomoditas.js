import React, { Component } from 'react';
import {View,Text, StyleSheet, ScrollView, TouchableOpacity, TouchableHighlight} from 'react-native';
import Icon from 'react-native-ico';
import DetailHewan from './DetailHewan';

const DetailKomoditas = (props) =>{

    const {navigation} = props;


    return(
        <View  style={{flex:1}}>
            <View style={style.container}>
                <TouchableOpacity 
                onPress={() => {navigation.goBack()}} 
                style={{padding:24}}>
                    <Icon name="go-back-left-arrow" group="material-design" color="#fff" size={24}/>
                </TouchableOpacity>
                <Text style={style.header}>Detail Komoditas</Text>
                <View style={style.icons}>
                    <TouchableOpacity 
                onPress={() => {alert('edit pressed')}}
                style={style.margin}
                >
                    <Icon Icon name="edit" group="ui-interface" color="#fff" size={24}/>
                </TouchableOpacity>
                <TouchableOpacity 
                onPress={() => {alert('delete pressed')}} 
                >
                    <Icon Icon name="trash" group="ui-interface" color="#fff" size={24}/>
                </TouchableOpacity>
                </View>
            </View>
            <ScrollView>
                <View style={text.row}>
                    <View style={text.column}>
                        <View style={text.content}>
                            <Text style = {text.title}>Total Luas Lahan (m2)</Text>
                            <Text style={text.isi}>160</Text>
                        </View>
                        <View style={text.content}>
                            <Text style = {text.title}>Rumpun</Text>
                            <Text style={text.isi}>Brahman</Text>
                        </View>
                    </View>
                    <View style={text.column}>
                        <View style={text.content}>
                            <Text style = {text.title}>Luas Lahan Digunakan (m2)</Text>
                            <Text style={text.isi}>160</Text>
                        </View>
                        <View style={text.content}>
                            <Text style = {text.title}>Klasifikasi</Text>
                            <Text style={text.isi}>Penggemukan</Text>
                        </View>
                    </View>
                    <View style={text.column}>
                        <View style={text.content}>
                            <Text style = {text.title}>Total Hewan</Text>
                            <Text style={text.isi}>160</Text>
                        </View>
                    </View>
                </View>
                <TouchableHighlight 
                style={card.container}  
                onPress={() => {navigation.navigate(DetailHewan)}} 
                activeOpacity={0.6} underlayColor="transparent" >
                    <View style={card.row}>
                        <View style={card.wrap}>
                            <Text style={card.title}>Nama Sapi - eartag</Text>
                            <View>
                                <Text style={card.isi}> 6 Tahun 0 Bulan 1 Hari</Text>
                                <Text style={card.isi}>Jantan</Text>
                            </View>
                        </View>
                        <Icon color="grey" width="16" height="16" name="right-chevron" group="font-awesome"/>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight 
                style={card.container2}  
                onPress={() => {navigation.navigate(DetailHewan)}} 
                activeOpacity={0.6} underlayColor="transparent" >
                    <View style={card.row}>
                        <View style={card.wrap}>
                            <Text style={card.title}>Nama Sapi - eartag</Text>
                            <View>
                                <Text style={card.isi}> 6 Tahun 0 Bulan 1 Hari</Text>
                                <Text style={card.isi}>Jantan</Text>
                            </View>
                        </View>
                        <Icon color="grey" width="16" height="16" name="right-chevron" group="font-awesome"/>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight 
                style={card.container}  
                onPress={() => {navigation.navigate(DetailHewan)}} 
                activeOpacity={0.6} underlayColor="transparent" >
                    <View style={card.row}>
                        <View style={card.wrap}>
                            <Text style={card.title}>Nama Sapi - eartag</Text>
                            <View>
                                <Text style={card.isi}> 6 Tahun 0 Bulan 1 Hari</Text>
                                <Text style={card.isi}>Jantan</Text>
                            </View>
                        </View>
                        <Icon color="grey" width="16" height="16" name="right-chevron" group="font-awesome"/>
                    </View>
                </TouchableHighlight>
            </ScrollView>
        </View>
    )
}

const card = StyleSheet.create({
    container2:{
        backgroundColor:'transparent',
        height: 84,
    },
    container:{
        backgroundColor:'#E5E5E5',
        height: 84,
    },
    row:{
        flexDirection:'row',
        justifyContent:'space-between',
        flex:1,
        alignItems:'center',
        paddingRight:"3%"
    },
    wrap:{
        marginLeft:'3%',
        justifyContent:'space-between',
        height:'100%',
        paddingVertical:'2%'
    },
    title:{
        fontSize:14,
        color:"#3B3E42"
    },
    isi:{
        fontSize:12,
        color:"grey"
    }

})

const text = StyleSheet.create({
    title:{
        color:'grey',
        fontSize: 12,
        justifyContent:'center'
    },
    isi:{
        color:'#3B3E42',
        fontSize: 14,
        fontWeight:'600'
    },
    content:{
        marginHorizontal:12,
        marginVertical: 8
    },
    row:{
        flexDirection:'row',
        justifyContent:'center',
        marginHorizontal:16
    }, 
    column:{
        flexDirection:'column',
        justifyContent:'flex-start',
        marginVertical:12,
    }

})

const style = StyleSheet.create({
    container:{
        width:'100%',
        right: 0,
        top:0,
        height:64,
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'space-between',
        backgroundColor:'#57B860'
    },
    header:{
        marginTop:16,
        fontSize: 20,
        fontWeight: "600",
        color:'white',
        marginBottom:16,
    },
    icons:{
        flexDirection:'row',
        paddingRight:16,
    },
    margin:{
        marginRight:16
    }
})



export default DetailKomoditas;