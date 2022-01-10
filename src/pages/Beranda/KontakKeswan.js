import React, {useEffect, useCallback} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ScrollView,
    TouchableHighlight,
    TextInput,
    SafeAreaView
} from "react-native";
import ArrowBackWhite from '../../component/assets/icons/ArrowBackWhite';
import IconFilter from '../../component/assets/icons/FilterIcon';
import SeeDetails from '../../component/assets/icons/IconSeeDetails';
import RightChevron from '../../component/assets/icons/RightChevron';
import SearchIcon from '../../component/assets/icons/SearchIcon';
import CardKeswan from '../../component/CardKeswan';
import { firebase } from '@react-native-firebase/firestore';
import { FlatList } from 'react-native-gesture-handler';



const KontakKeswan = (props) =>{

    const {navigation} = props;

    const VeterinerRef = firebase.firestore().collection('veteriner');
    const [veteriner, setVeteriner] =  React.useState([]);
    const [loading, setLoading] = React.useState([]);
    const [textShown, setTextShown] = React.useState(false);
    const [lengthMore,setLengthMore] = React.useState(false); //to show the "Read more & Less Line"

    const toggleNumberOfLines = () => { //To toggle the show text or hide it
    setTextShown(!textShown);
    }

    const onTextLayout = useCallback(e =>{
    setLengthMore(e.nativeEvent.lines.length >=2); //to check the text is more than 4 lines or not
    // console.log(e.nativeEvent);
    },[]);

    useEffect(() => {
        return VeterinerRef.onSnapshot( querySnapshot => {
            const list = [];
            querySnapshot.forEach(doc => {
                const { nama_rsh, kontak, alamat} = doc.data();
                list.push({
                    id: doc.id,
                    alamat,
                    kontak,
                    nama_rsh,
                });
            });

            setVeteriner(list);

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
            <SafeAreaView>
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
                <View>
                    <FlatList
                    data={veteriner}
                    keyExtractor={(item) => item.id}
                    removeClippedSubviews={true}
                    renderItem={({item}) =>
                        <View style={card.container}>
                            <View style={{paddingHorizontal: 16}}>
                                <View style={{flexDirection:'column'}}>
                                    <Text style={card.judul}>{item.nama_rsh}</Text>
                                    <Text 
                                    style={card.infodetail}
                                    onTextLayout={onTextLayout}
                                    numberOfLines={textShown ? undefined : 2}
                                    >
                                        {item.alamat}
                                    </Text>
                                    <Text style={card.infodetail}>{item.kontak}</Text>
                                    <TouchableOpacity
                                     activeOpacity={0.5}
                                    underlayColor="#fff"
                                    style={card.infokomoditas}
                                    onPress={() => {navigation.navigate('DetailKontakKeswan')}}
                                    >
                                    <SeeDetails/>
                                    <Text style={card.detailtext}>Info Detail</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    }
                    />
                </View>
            </SafeAreaView>
        </View>
    )
}

const card = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        borderWidth: 1,
        borderColor: '#DDDDFF',
        marginHorizontal: 16,
        marginTop: 0,
        marginBottom: 24,
        borderRadius: 8,
        height: 150,
        justifyContent:'center',
        elevation: 8,
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
    infokomoditas:{
        justifyContent:'flex-end',
        flexDirection:'row',
        alignItems:'center',
        marginTop: 16,
        alignSelf:'flex-end'

    },
    icon:{
        alignItems:'center',
        justifyContent:'center',
    },
    infodetail:{
        fontSize:14,
        color:'#626262',
        marginVertical: 2,
        fontFamily:'Mulish-Regular',
        lineHeight: 18
    },
    judul:{
        fontSize: 16,
        color:'#626262',
        fontFamily:'Mulish-Bold',
        marginBottom: 8
    },
    detailtext:{
        fontFamily:'Mulish-Bold',
        fontSize: 12,
        color: '#565656',
        marginLeft: 8
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
        fontFamily:'Mulish-Bold',
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
        width: 300,
        fontFamily:'Mulish-Regular'
    },
    searchicon:{
        alignSelf:'center',
    }
    }
)


export default KontakKeswan;