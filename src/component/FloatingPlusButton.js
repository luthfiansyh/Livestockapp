import React, { Component } from 'react';
import {
  Text,
  View,
  Pressable,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import Icon from 'react-native-ico';

import { FAB } from 'react-native-paper';

const FloatingButton = (props) => {
    const {navigation} = props;

    return(
        <View>
            <FAB
                style={styles.fab}
                small
                icon="plus"
                onPress={() => console.log('Pressed')}
                />
        </View>
    )
}

const styles = StyleSheet.create({
    fab:{
        position: 'absolute',
        right: "4%",
        bottom: "10%",
        width: 48,
        height: 48,
        backgroundColor: "#57B860"
    }
})

export default FloatingButton;