import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ScrollView,
    TouchableHighlight
} from "react-native";
import ArrowBackWhite from '../../component/assets/icons/ArrowBackWhite';

const DetailKontakKeswan = (props) =>{

    const {navigation} = props;

    return(
        <View style={{flex:1, backgroundColor:'white'}}>
            <View style={style.container}>
                <TouchableOpacity 
                onPress={() => {navigation.goBack()}} 
                style={{padding:24}}>
                    <ArrowBackWhite/>
                </TouchableOpacity>
                <Text style={style.header}>Detail Kontak</Text>
                <View style={{height: 24, width:24, marginRight: 24, marginTop:16}}></View>
            </View>
            <ScrollView>
                <View style={{marginBottom:12}}></View>
                <View style={card.infokomoditas}>
                    <View style={{flexDirection:'column'}}>
                        <Text style={card.judul}>Nama Instansi</Text>
                        <Text style={card.infodetail}>RSH Cikole Lembang</Text>
                    </View>
                </View>
                <View style={card.infokomoditas}>
                    <View style={{flexDirection:'column'}}>
                        <Text style={card.judul}>Alamat</Text>
                        <Text style={card.infodetail}>JL. Raya Tangkuban Perahu, Km. 22, Cikole, Lembang, Cikole, Lembang, Kabupaten Bandung Barat, Jawa Barat 40391</Text>
                    </View>
                </View>
                <View style={card.infokomoditas}>
                    <View style={{flexDirection:'column'}}>
                        <Text style={card.judul}>Kontak</Text>
                        <Text style={card.infodetail}>(022) 2501151</Text>
                    </View>
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
        marginHorizontal: 16,
        marginVertical: 12,
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
        marginTop: 4,
        fontWeight: '700',
        lineHeight: 17.5
    },
    judul:{
        fontSize: 14,
        color:'#626262',
        marginBottom: 4

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
    }
)


export default DetailKontakKeswan;