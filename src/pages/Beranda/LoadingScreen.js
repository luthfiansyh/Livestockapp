import React from 'react';
import {
    StyleSheet,
    ActivityIndicator,
    View
} from 'react-native';

export default function LoadingScreen(){
    return(
        <View style={styles.container}>
            <ActivityIndicator color="#57B860" size="large"/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#fff',
        justifyContent:'center',
        alignItems:'center'
    }
})