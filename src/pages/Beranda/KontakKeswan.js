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

const KontakKeswan = (props) =>{

    const {navigation} = props;

    return(
        <View style={{flex:1, backgroundColor:'white'}}>
            <View style={style.container}>
                <TouchableOpacity 
                onPress={() => {navigation.goBack()}} 
                style={{padding:24}}>
                    <ArrowBackWhite/>
                </TouchableOpacity>
                <Text style={style.header}>Kontak Keswan/Veteriner</Text>
                <TouchableOpacity 
                onPress={() => {navigation.navigate('FilterKontakKeswan')}} 
                style={{padding:24}}>
                    <IconFilter/>
                </TouchableOpacity>
            </View>
            <ScrollView>
                <View style={{marginBottom:24}}></View>
                <View style={style.searchbar}>
                    <TextInput
                    style={style.searchtext}
                    underlineColorAndroid = "transparent"
                    placeholder = "Cari Kontak Keswan/Veteriner..."
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
                    onPress={() => {navigation.navigate('DetailKontakKeswan')}}
                    >
                        <View style={card.infokomoditas}>
                            <View style={{flexDirection:'column'}}>
                                <Text style={card.judul}>RSH Cikole Lembang</Text>
                                <Text style={card.infodetail}>Jl. Raya Tangkuban Parahu No.KM. 22,2, Cikole...</Text>
                                <Text style={card.infodetail}>(022) 82782244)</Text>
                            </View>
                            <RightChevron/>
                        </View>
                    </TouchableHighlight>
                </View>
                <View style={card.container}>
                    <TouchableHighlight 
                    activeOpacity={0.5}
                    underlayColor="#ECECEC"
                    onPress={() => {alert ('Detail Kontak Keswan')}}
                    >
                        <View style={card.infokomoditas}>
                            <View style={{flexDirection:'column'}}>
                                <Text style={card.judul}>RSH Cikole Lembang</Text>
                                <Text style={card.infodetail}>Jl. Raya Tangkuban Parahu No.KM. 22,2, Cikole...</Text>
                                <Text style={card.infodetail}>(022) 82782244)</Text>
                            </View>
                            <RightChevron/>
                        </View>
                    </TouchableHighlight>
                </View>
                <View style={card.container}>
                    <TouchableHighlight 
                    activeOpacity={0.5}
                    underlayColor="#ECECEC"
                    onPress={() => {alert ('Detail Kontak Keswan')}}
                    >
                        <View style={card.infokomoditas}>
                            <View style={{flexDirection:'column'}}>
                                <Text style={card.judul}>RSH Cikole Lembang</Text>
                                <Text style={card.infodetail}>Jl. Raya Tangkuban Parahu No.KM. 22,2, Cikole...</Text>
                                <Text style={card.infodetail}>(022) 82782244)</Text>
                            </View>
                            <RightChevron/>
                        </View>
                    </TouchableHighlight>
                </View>
                <View style={card.container}>
                    <TouchableHighlight 
                    activeOpacity={0.5}
                    underlayColor="#ECECEC"
                    onPress={() => {alert ('Detail Kontak Keswan')}}
                    >
                        <View style={card.infokomoditas}>
                            <View style={{flexDirection:'column'}}>
                                <Text style={card.judul}>RSH Cikole Lembang</Text>
                                <Text style={card.infodetail}>Jl. Raya Tangkuban Parahu No.KM. 22,2, Cikole...</Text>
                                <Text style={card.infodetail}> 022 - 82782244</Text>
                            </View>
                            <RightChevron/>
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
        height: 84,
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
        backgroundColor:'red'
    },
    photo:{
        height:68,
        width:68,
        backgroundColor:'grey',
        borderRadius:8,
    },
    infokomoditas:{
        justifyContent:'space-around',
        marginHorizontal: 8,
        flexDirection:'row',
        alignItems:'center'

    },
    icon:{
        alignItems:'center',
        justifyContent:'center',
    },
    infodetail:{
        fontSize:14,
        color:'#626262',
        marginVertical: 2
    },
    judul:{
        fontSize: 16,
        color:'#626262',
        fontWeight: '700'
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


export default KontakKeswan;