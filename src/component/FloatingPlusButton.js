import React, { Component } from 'react';
import {
  Text,
  View,
  Pressable,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import Icon from 'react-native-ico';

const FloatingButton = (props) => {
    const {navigation} = props;

    return(
        <View style={styles.fab}>
            <TouchableOpacity
            style={styles.touchable}
            onPress={() => {navigation.navigate('NavKomoditas')}}
            >
                <Icon style={styles.icon} name="plus" group="ui-interface" color="white"/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    fab:{
        position: 'absolute',
        right: "4%",
        bottom: "10%",
    },
    touchable:{
        backgroundColor: "#57B860",
        opacity: 0.8,
        borderRadius: 100,
        width: 48,
        height: 48, 
    },
    icon:{
        margin:14
    }
})

export default FloatingButton;