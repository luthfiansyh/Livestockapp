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

const SecondRoute = (props) => {
    const {navigation} = props;

    <View style={style.container}>
        <ScrollView>
            <View style={style.data}>
                <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                    <Text style={style.judul}>Grafik Pertumbuhan Hewan</Text>
                    <TouchableOpacity 
                    onPress={() => {navigation.navigate('tambah pressed')}}
                    style={style.button}
                    >
                        <Icon name="add-plus-button" group="material-design" color="white" width="15" height="15"/>
                        <Text style={style.buttontext}>TAMBAH</Text>
                    </TouchableOpacity>
                </View>
            </View>
            {/* <ChartGraph/> */}
        </ScrollView>
    </View>
};

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

export default SecondRoute;