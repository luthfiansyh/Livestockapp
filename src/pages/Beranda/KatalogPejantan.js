import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ScrollView,
    TouchableHighlight,
    TextInput
} from "react-native";
import ArrowBackWhite from '../../component/assets/icons/ArrowBackWhite';
import IconFilter from '../../component/assets/icons/FilterIcon';
import RightChevron from '../../component/assets/icons/RightChevron';
import SearchIcon from '../../component/assets/icons/SearchIcon';

const KatalogPejantan = (props) =>{

    const {navigation} = props;

    return(
        <View style={{flex:1, backgroundColor:'white'}}>
            <View style={style.container}>
                <TouchableOpacity 
                onPress={() => {navigation.goBack()}} 
                style={{padding:24}}
                >
                    <ArrowBackWhite/>
                </TouchableOpacity>
                <Text style={style.header}>Katalog Pejantan</Text>
                <TouchableOpacity 
                onPress={() => {navigation.navigate('FilterKatalogPejantan')}} 
                style={{padding:24}}
                >
                    <IconFilter/>
                </TouchableOpacity>
            </View>
            <ScrollView>
                <View style={{marginBottom:24}}></View>
                <View style={style.searchbar}>
                    <TextInput
                    style={style.searchtext}
                    underlineColorAndroid = "transparent"
                    placeholder = "Cari Katalog Pejantan..."
                    autoCapitalize = "none"
                    />
                    <View style={style.searchicon}>
                        <SearchIcon/>
                    </View>
                </View>
                <View style={card.container}>
                    <TouchableHighlight 
                    activeOpacity={0.5}
                    underlayColor="#ECECEC"
                    onPress={() => {navigation.navigate('DetailKatalogPejantan')}}
                    >
                        <View style={card.margin}>
                            <View style={card.leftside}>
                                <View style={card.photo}></View>
                                <View style={card.infokomoditas}>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={card.namakomoditas}>Rambo</Text>
                                        <Text style={card.namakomoditas}>-</Text>
                                        <Text style={card.namakomoditas}>001</Text>
                                    </View>
                                    <View style ={card.infokomoditas2}>
                                        <View>
                                            <Text style={card.subjudul}>Komoditas</Text>
                                            <Text style={card.infodetail}>Sapi</Text>
                                        </View>
                                        <View>
                                            <Text style={card.subjudul}>Rumpun</Text>
                                            <Text style={card.infodetail}>Belgian Blue</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View style={card.icon}>
                                <RightChevron/>
                            </View>
                        </View>
                    </TouchableHighlight>
                </View>
                <View style={card.container}>
                    <TouchableHighlight 
                    activeOpacity={0.5}
                    underlayColor="#ECECEC"
                    onPress={() => {alert('Clicked')}}
                    >
                        <View style={card.margin}>
                            <View style={card.leftside}>
                                <View style={card.photo}></View>
                                <View style={card.infokomoditas}>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={card.namakomoditas}>Rambo</Text>
                                        <Text style={card.namakomoditas}>-</Text>
                                        <Text style={card.namakomoditas}>002</Text>
                                    </View>
                                    <View style ={card.infokomoditas2}>
                                        <View>
                                            <Text style={card.subjudul}>Komoditas</Text>
                                            <Text style={card.infodetail}>Sapi</Text>
                                        </View>
                                        <View>
                                            <Text style={card.subjudul}>Rumpun</Text>
                                            <Text style={card.infodetail}>Belgian Blue</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View style={card.icon}>
                                <RightChevron/>
                            </View>
                        </View>
                    </TouchableHighlight>
                </View>
                <View style={card.container}>
                    <TouchableHighlight 
                    activeOpacity={0.5}
                    underlayColor="#ECECEC"
                    onPress={() => {alert('Clicked')}}
                    >
                        <View style={card.margin}>
                            <View style={card.leftside}>
                                <View style={card.photo}></View>
                                <View style={card.infokomoditas}>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={card.namakomoditas}>Rambo</Text>
                                        <Text style={card.namakomoditas}>-</Text>
                                        <Text style={card.namakomoditas}>003</Text>
                                    </View>
                                    <View style ={card.infokomoditas2}>
                                        <View>
                                            <Text style={card.subjudul}>Komoditas</Text>
                                            <Text style={card.infodetail}>Sapi</Text>
                                        </View>
                                        <View>
                                            <Text style={card.subjudul}>Rumpun</Text>
                                            <Text style={card.infodetail}>Belgian Blue</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View style={card.icon}>
                                <RightChevron/>
                            </View>
                        </View>
                    </TouchableHighlight>
                </View>
            </ScrollView>
        </View>
    )
}

const card = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#ECECEC',
        marginHorizontal: '4%',
        marginTop: 0,
        marginBottom: 16,
        borderRadius: 8,
        height: 96,
        maxHeight: 100,
        justifyContent:'center'
    },
    margin:{
        marginHorizontal:16,
        flexDirection:'row',
        justifyContent:'center',
    },
    leftside:{
        flexDirection:'row',
    },
    photo:{
        height:68,
        width:68,
        backgroundColor:'grey',
        borderRadius:8,
    },
    infokomoditas:{
        paddingLeft:'4%',
        justifyContent:'space-between',
        width: '78%'
    },
    infokomoditas2:{
        flexDirection:'row',
        justifyContent:'space-between',
    },
    icon:{
        alignItems:'center',
        justifyContent:'center',
    },
    subjudul:{
        fontSize:12,
        fontWeight:'normal',
        marginBottom: 4,
        color:'grey'
    },
    infodetail:{
        fontSize:14,
    },
    namakomoditas:{
        fontSize: 16, 
        paddingRight: 8
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
    searchbar:{
        height: 48, 
        borderWidth: 1,
        marginHorizontal: 16,
        marginBottom: 24,
        borderRadius: 50,
        flexDirection:'row',
    },
    searchtext:{
        justifyContent:'center',
        alignSelf:'center',
        marginHorizontal: 16,
        width: 300
    },
    searchicon:{
        alignSelf:'center',
    }
    }
)


export default KatalogPejantan;