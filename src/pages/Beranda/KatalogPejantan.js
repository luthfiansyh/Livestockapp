import React, {useEffect} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ScrollView,
    TouchableHighlight,
    TextInput,
    FlatList
} from "react-native";
import ArrowBackWhite from '../../component/assets/icons/ArrowBackWhite';
import IconFilter from '../../component/assets/icons/FilterIcon';
import RightChevron from '../../component/assets/icons/RightChevron';
import SearchIcon from '../../component/assets/icons/SearchIcon';
import SeeDetails from '../../component/assets/icons/IconSeeDetails';
import { firebase } from '@react-native-firebase/firestore';
import { SafeAreaView } from 'react-native-safe-area-context';

const KatalogPejantan = (props) =>{

    const {navigation} = props;
    const [katalogpejantan, setKatalogPejantan] = React.useState('');
    const [loading, setLoading] = React.useState(true);

    useEffect(() => {
        const KatalogPejantanRef = firebase.firestore().collection('pejantan')
        return KatalogPejantanRef.onSnapshot( querySnapshot => {
            const list = [];
            querySnapshot.forEach(doc => {
                const { jenis_komoditas, klasifikasi, kode_hewan, nama_pejantan, rumpun_komoditas } = doc.data();
                list.push({
                    nama_pejantan,
                    kode_hewan,
                    jenis_komoditas,
                    klasifikasi,
                    rumpun_komoditas
                });
            });

            setKatalogPejantan(list);

            if(loading){
                setLoading(false);
            }
    });
    },[]);

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
            <SafeAreaView>
                <View style={{height: '95%'}}>
                            <FlatList
                            style={card.flatlist}
                            showsVerticalScrollIndicator={false}
                            data={katalogpejantan}
                            fadingEdgeLength={50}
                            renderItem={({item}) => (
                                <View style={card.container}>
                                    <TouchableOpacity
                                    activeOpacity={0.5}
                                    underlayColor="#fff"
                                    onPress={() => {navigation.navigate('DetailKomoditas')}}
                                    >
                                    <View style={card.margin}>
                                        <View style={card.leftside}>
                                            <View style={card.photo}></View>
                                            <View style={card.infokomoditas}>
                                                <Text style={card.namakomoditas}>{item.nama_pejantan}</Text>
                                                <View style ={card.infokomoditas2}>
                                                    <View>
                                                        <Text style={card.subjudul}>Rumpun</Text>
                                                        <Text style={card.infodetail}>{item.rumpun_komoditas}</Text>
                                                    </View>
                                                    <View>
                                                        <Text style={card.subjudul}>Klasifikasi</Text>
                                                        <Text style={card.infodetail}>{item.klasifikasi}</Text>
                                                    </View>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                    <View
                                    style={card.detail}
                                    >
                                    <SeeDetails/>
                                    <Text style={card.detailtext}>Info Detail</Text>
                                    </View>
                                    </TouchableOpacity>
                                </View>
                            )}
                            keyExtractor={(item) => item.id}
                            removeClippedSubviews={true}
                            />
                        </View>
            </SafeAreaView>
        </View>
    )
}

const card = StyleSheet.create({
    container:{
        backgroundColor:'#fff',
        marginHorizontal: 16,
        top: 4,
        bottom: 4,
        marginTop: 8,
        marginBottom: 16,
        borderRadius: 8,
        height: 150,
        justifyContent:'center',
        borderColor: '#DDDDFF',
        borderWidth: 1,
        elevation: 2
    },
    margin:{
        marginHorizontal:16,
        marginVertical: 8,
        flexDirection:'row',
        justifyContent:'center',
    },
    leftside:{
        flexDirection:'row',
    },
    photo:{
        height:68,
        width:68,
        backgroundColor:'#57B860',
        borderRadius:8
    
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
    detail:{
        justifyContent:'flex-end',
        alignSelf:'flex-end',
        flexDirection:'row',
        alignItems:'center',
        marginTop: 16,
        marginRight: 16,
    },
    icon:{
        alignItems:'center',
        justifyContent:'center',
    },
    subjudul:{
        fontSize:12,
        fontWeight:'normal',
        marginBottom: 2,
        color:'#959595',
        fontFamily:'Mulish-SemiBold'
    },
    infodetail:{
        fontSize:14,
        fontFamily:'Mulish-SemiBold',
        color:'#3c3c3c'
    },
    namakomoditas:{
        fontSize: 16,
        fontFamily:'Mulish-Bold',
        color:'#565656'
    },
    detailtext:{
        fontFamily:'Mulish-Bold',
        fontSize: 12,
        color: '#565656',
        marginLeft: 8
    },
    flatlist:{
        // flex: 1,
        flexGrow: 1,
        height: '100%'
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
        color:'white',
        marginBottom:16,
        fontFamily: 'Mulish-Bold'
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