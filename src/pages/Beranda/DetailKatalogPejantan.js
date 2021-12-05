import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ScrollView,
    Linking
} from "react-native";
import ArrowBackWhite from '../../component/assets/icons/ArrowBackWhite';

const DetailKatalogPejantan = (props) =>{

    const {navigation} = props;

    return(
        <View style={{flex:1, backgroundColor:'white'}}>
            <View style={style.container}>
                <TouchableOpacity 
                onPress={() => {navigation.goBack()}} 
                style={{padding:24}}>
                    <ArrowBackWhite/>
                </TouchableOpacity>
                <Text style={style.header}>Detail Pejantan</Text>
                <View style={{height: 24, width:24, marginRight: 24, marginTop:16}}></View>
            </View>
            <ScrollView>
                <View style={style.gambar}>
                    <Text>Gambar Pejantan</Text>
                </View>
                <View style={{flexDirection:'row', marginHorizontal: 16}}>
                    <Text style={style.nama}>Rider</Text>
                    <Text  style={style.nama}>-</Text>
                    <Text  style={style.nama}>001</Text>
                </View>
                <View style ={style.infokomoditas}>
                    <View>
                        <Text style={style.subjudul}>Komoditas</Text>
                        <Text style={style.infodetail}>Sapi</Text>
                    </View>
                    <View style={{marginLeft: 16}}>
                        <Text style={style.subjudul}>Rumpun</Text>
                        <Text style={style.infodetail}>Limousin</Text>
                    </View>
                </View>
                <View style={style.group}>
                    <Text style={style.informasihewan}>Informasi Hewan</Text>
                </View>
                <View style={style.box}>
                    <View style={style.row}>
                        <View style={style.column}>
                            <Text style={style.left}>Asal Hewan</Text>
                            <Text style={style.left}>Tanggal Lahir</Text>
                            <Text style={style.left}>Umur Hewan</Text>
                            <Text style={style.left}>Bobot Badan (kg)</Text>
                            <Text style={style.left}>Panjang Badan (cm)</Text>
                            <Text style={style.left}>Tinggi Gumba (cm)</Text>
                            <Text style={style.left}>Lingkar Dada (cm)</Text>
                        </View>
                        <View style={style.column}>
                            <Text style={style.right}>597</Text>
                            <Text style={style.right}>172</Text>
                            <Text style={style.right}>210</Text>
                            <Text style={style.right}>168</Text>
                            <Text style={style.right}>100</Text>
                            <Text style={style.right}>200</Text>
                            <Text style={style.right}>200</Text>
                        </View>
                    </View>
                </View>
                <View style={{alignItems:'center'}}>
                    <Text style={style.informasihewan}>Link Pemesanan:</Text>
                    <Text 
                    onPress={() => Linking.openURL('https://biblembang.ditjenpkh.pertanian.go.id/')}
                    style={style.hyperlink}
                    >https://biblembang.ditjenpkh.pertanian.go.id/</Text>
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
        backgroundColor:'#57B860'
    },
    header:{
        marginTop:16,
        fontSize: 20,
        fontWeight: "600",
        color:'white',
        marginBottom:16
    },
    gambar:{
        height: 240,
        backgroundColor:'#C4C4C4',
        margin: 16,
        alignItems:'center',
        justifyContent:'center'
    },
    nama:{
        fontSize: 24,
        marginRight: 8,
        color:'#626262',
        fontWeight:'700'
    },
    infokomoditas:{
        flexDirection:'row',
        justifyContent:'space-between',
        margin: 16,
        width: '50%'
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
    group:{
        margin: 16,
    },
    informasihewan:{
        fontSize: 14,
        color:'#626262',
        fontWeight: '700'
    },
    row:{
        flexDirection:'row',
        justifyContent:'flex-start',
    },
    box:{
        backgroundColor:'#EFEFEF',
        paddingVertical:16,
        borderRadius: 8,
        marginHorizontal: 16,
        marginBottom: 72
    },
    left:{
        color:'#66686A',
        fontSize:14,
        marginVertical:4,
        marginLeft:16,
        marginRight:24,
    },
    right:{
        color:'black',
        fontSize:14,
        marginVertical:4,
    },
    column:{
    flexDirection:'column',
    flex:1,
    },
    hyperlink:{
        fontSize: 14,
        alignItems:'center',
        marginTop: 16,
        marginBottom: 36,
        textDecorationLine: 'underline'
    }
}
)


export default DetailKatalogPejantan;