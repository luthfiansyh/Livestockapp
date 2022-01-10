import React from 'react';
import {
    StyleSheet,
    ActivityIndicator,
    View
} from 'react-native';


const LoadingSplash = (props) => {
    const {navigation} = props;

    setTimeout(() => {
    navigation.navigate('FirstSplash')},1500);
    
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

export default LoadingSplash;