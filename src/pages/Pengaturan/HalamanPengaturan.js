import React from 'react';
import {View,Text, ScrollView, StyleSheet, TouchableHighlight, TouchableOpacity} from 'react-native';
import ArrowBack from '../../component/assets/icons/ArrowBack';
import IconEdit from '../../component/assets/icons/IconEdit';
import RightChevron from '../../component/assets/icons/RightChevron';

const HalamanPengaturan = (props) =>{
    const {navigation} = props;
    
    return(
        <View style={{flex:1}}>
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.margins}></View>
                    <Text style={styles.Text}>Pengaturan Akun</Text>
                    <View style={styles.inside}></View>
                </View>
                <View style={styles.judul}>
                    <Text style={styles.isijudul}>PROFIL</Text>
                </View>
                <TouchableHighlight
                onPress={() => {navigation.navigate("HalamanProfil")}}
                >
                    <View style={styles.card}>
                        <Text style={styles.text}>Profil</Text>
                        <RightChevron/>

                    </View>
                </TouchableHighlight>
                <View style={styles.judul}>
                    <Text style={styles.isijudul}>LIVESTOCKAPP</Text>
                </View>
                <TouchableHighlight
                onPress={() => {alert("Tentang Kami")}}
                >
                    <View style={styles.card}>
                        <Text style={styles.text}>Tentang Kami</Text>
                        <RightChevron/>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight
                onPress={() => {alert("Kontak")}}
                >
                    <View style={styles.card}>
                        <Text style={styles.text}>Kontak</Text>
                        <RightChevron/>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight
                onPress={() => {alert("Bantuan")}}
                >
                    <View style={styles.card}>
                        <Text style={styles.text}>Bantuan</Text>
                        <RightChevron/>
                    </View>
                </TouchableHighlight>
                <View style={styles.judul}>
                    <Text style={styles.isijudul}>LOGOUT</Text>
                </View>
                <TouchableHighlight
                onPress={() => {navigation.navigate("NavigationLogin")}}
                >
                    <View style={styles.card}>
                        <Text style={styles.text}>Logout Akun</Text>
                    </View>
                </TouchableHighlight>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        backgroundColor:'#57B860',
        height:240,
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    photo:{
        height:100,
        width:100,
        backgroundColor:'white',
        borderRadius:100,
    },
    nametag:{
        color:'white',
        fontSize: 20,
        fontWeight:"800",
        flex:1,
        textAlign:'center'
    },
    wrap:{
        flexDirection:'row',
        marginTop:24,
        alignItems:'center',
        width:"100%",
        justifyContent:'center'

    },
    icons:{
        width:"100%",
        alignItems:'flex-end',
        paddingRight:24,
        marginBottom:16
    },
    card:{
        width:'100%',
        backgroundColor:'#fff',
        borderBottomColor: '#E0E0E0',
        borderBottomWidth:1,
        justifyContent:'space-between',
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:24
    },
    card2:{
        marginTop:24,
        width:'100%',
        height:72,
        backgroundColor:'transparent',
        justifyContent:'flex-start',
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:24
    },
    text:{
        fontSize:14,
        fontWeight:"600",
        paddingVertical: 20,
        color:'#626262',
    },
    buttonbackground:{
        marginTop: "24%",
        bottom:'4%',
        alignItems: 'center',
        marginHorizontal:16,
    },
    button:{
        justifyContent: 'flex-start',
        width: "100%",
        height: 48,
        borderColor:'#EB5757',
        borderWidth:2,
        borderRadius:4,
        flexDirection:'row',
        backgroundColor:'white'
    },
    buttontext:{
        color:'#EB5757',
        fontSize: 16,
        fontWeight:'800',
        marginHorizontal:16
    },
    wrapper:{
        flexDirection:'row',
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    judul:{
        backgroundColor: '#F6F6F6'
    },
    isijudul:{
        paddingVertical : 8,
        paddingLeft: 24, 
        color: '#818181',
        fontSize: 12, 
        fontWeight: '600'
    },
    container:{
        height: 64,
        justifyContent: 'flex-start',
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom:16,
        justifyContent: 'space-between',
        backgroundColor:'#57B860'
    },
    margins:{
        height: 24,
        width:24,
        marginLeft: 24,
        marginTop:16
    },
    Text:{
        marginTop:16,
        fontSize: 20,
        fontWeight: "600",
        color:'white'
    },
    inside:{
        height: 24,
        width:24,
        marginRight: 24,
        marginTop:16
    }
})

export default HalamanPengaturan;