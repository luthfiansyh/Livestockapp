import React from 'react';
import { TabView, SceneMap, TabBar, createMaterialTopTabNavigator } from 'react-native-tab-view';
import { StyleSheet,
    ScrollView,
    Text,
    View,
    useWindowDimensions,
    TouchableOpacity,
    TouchableHighlight

} from 'react-native';
import Icon from 'react-native-ico';

const FirstRoute = (props) => {

    const {navigation} = props;

    return(
        <View style={style.container}>
      <ScrollView>
        <View style={style.data}>
            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                <Text style={style.judul}>Data Sapi</Text>
                <TouchableOpacity 
                onPress={() => {navigation.navigate(DetailPengukuran)}} 
                >
                    <Icon name="edit-interface-symbol-of-square-paper-with-a-pencil" group="coolicons" color="#66686A" width="20" height="20"/>
                </TouchableOpacity>
            </View>
            <View style={style.box}>
                <View style={style.row}>
                    <View style={style.column}>
                        <Text style={style.left}>Sistem Pemeliharaan</Text>
                        <Text style={style.left}>Jenis Kelamin</Text>
                        <Text style={style.left}>Jenis Kelahiran</Text>
                        <Text style={style.left}>Tanggal Lahir</Text>
                        <Text style={style.left}>Umur</Text>
                        <Text style={style.left}>Asal Sapi</Text>
                    </View>
                    <View style={style.column}>
                        <Text style={style.right}>Intensif</Text>
                        <Text style={style.right}>Jantan</Text>
                        <Text style={style.right}>Tunggal</Text>
                        <Text style={style.right}>12 September 2015</Text>
                        <Text style={style.right}>6 tahun 0 bulan 1 hari</Text>
                        <Text style={style.right}>Beli</Text>
                    </View>
                </View>
            </View>
        </View>
        <View style={style.data}>
            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                <Text style={style.judul}>Data Kepemilikan</Text>
            </View>
            <View style={style.box}>
                <View style={style.row}>
                    <View style={style.column}>
                        <Text style={style.left}>Nama Pemilik</Text>
                        <Text style={style.left}>Alamat {"\n\n"}</Text>
                        <Text style={style.left}>Total Luas Lahan</Text>
                        <Text style={style.left}>Luas Lahan Digunakan</Text>
                    </View>
                    <View style={style.column}>
                        <Text style={style.right}>Luthfiansyah</Text>
                        <Text style={style.right}>Perum Asabri blok A{"\n"}nomor 3 Kec Jatiluhur{"\n"}Kab Purwakarta</Text>
                        <Text style={style.right}>160</Text>
                        <Text style={style.right}>120</Text>
                    </View>
                </View>
            </View>
        </View>
        <View style={{marginBottom:16}}></View>
        <View style={style.buttonbackground}>
          </View>
      </ScrollView>
  </View>
);
    }


const style = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white'
    },
    data:{
        marginHorizontal:24,
        marginTop:24,
    },
    judul:{
        fontSize: 14,
        fontWeight:'700'
    },
    column:{
        flexDirection:'column',
    },
    row:{
        flexDirection:'row',
        justifyContent:'flex-start',
    },
    box:{
        backgroundColor:'#EFEFEF',
        paddingVertical:16,
        borderRadius: 8,
        marginVertical:8,
    },
    left:{
        color:'#66686A',
        fontSize:14,
        marginVertical:2,
        marginLeft:16,
        marginRight:24
    },
    right:{
        color:'black',
        fontSize:14,
        marginVertical:2,
    },
    icons:{
        alignSelf:'flex-end',
        padding:8,
        marginTop:16,
        marginRight:24
    },
    button:{
        width: 96,
        height: 36,
        backgroundColor:'#57B860',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        borderRadius: 8,
    },
    buttontext:{
        fontSize:12,
        fontWeight:"bold",
        color:'white',
        lineHeight: 15,
        paddingHorizontal: 8
    },
    centertext:{
        textAlign:'center',
        marginHorizontal:"4%",
        marginVertical:16,
        fontSize:12,
        color:'#6C6C6C'
    },
    thumbnailtext:{
        fontSize:14,
        paddingVertical:12,
        flex:1
    },
    row2:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:'#f6f6f6',
        paddingHorizontal:24
    },
    row3:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:'#fff',
        paddingHorizontal:24
    }
})


export default FirstRoute;