import React from 'react';
import {View,Text, ScrollView, StyleSheet, TouchableHighlight, TouchableOpacity} from 'react-native';
import Icon from 'react-native-ico';

const HalamanPengaturan = (props) =>{
    const {navigation} = props;
    
    return(
        <View style={{flex:1}}>
            <ScrollView>
                <View style={styles.header}>
                                        <View style={styles.icons}>
                        <Icon name="edit" group="miscellaneous" color="white" height="24" width="24" />
                    </View>
                    <View style={styles.photo}></View>
                    <View style={styles.wrap}>
                        <Text style={styles.nametag}>Luthfiansyah</Text>
                    </View>
                </View>
                <TouchableHighlight
                onPress={() => {alert("Syarat dan ketentuan")}}
                >
                    <View style={styles.card}>
                        <Text style={styles.text}>Syarat Dan Ketentuan</Text>
                        <Icon width="16" height="16" name="right-chevron" group="font-awesome" color="grey" />

                    </View>
                </TouchableHighlight>
                <TouchableHighlight
                onPress={() => {alert("FAQ")}}
                >
                    <View style={styles.card}>
                        <Text style={styles.text}>FAQ</Text>
                        <Icon width="16" height="16" name="right-chevron" group="font-awesome" color="grey" />
                    </View>
                </TouchableHighlight>
                <TouchableHighlight
                onPress={() => {alert("Bantuan")}}
                >
                    <View style={styles.card}>
                        <Text style={styles.text}>Bantuan</Text>
                        <Icon width="16" height="16" name="right-chevron" group="font-awesome" color="grey" />
                    </View>
                </TouchableHighlight>
                <View style={styles.buttonbackground}>
                    <TouchableOpacity
                    style={styles.button}
                    onPress={() => {alert('Keluar')}}
                    >
                        <View style={styles.wrapper}>
                            <Icon width="16" height="16" name="sign-out-option" group="font-awesome" color="#EB5757ed" />
                            <Text style={styles.buttontext}>Keluar</Text>
                        </View>
                    </TouchableOpacity>
                </View>
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
        height:72,
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
        fontWeight:"600"
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
        flexDirection:'row'
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
    }
})

export default HalamanPengaturan;