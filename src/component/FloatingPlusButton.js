import React, { Component } from 'react';
import {
  Text,
  View,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-ico';

import { FloatingAction } from "react-native-floating-action";

const FloatingButton = (props) => {
    const {navigation} = props;

    return(
        <View>
            <Text>Floating Action example</Text>
        </View>
    )
}

export default FloatingButton;