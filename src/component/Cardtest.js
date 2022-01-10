import React, { Component, useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
  FlatList,
  Card
} from 'react-native';
import SeeDetails from './assets/icons/IconSeeDetails';
import firestore, {collection, getDocs} from '@react-native-firebase/firestore';
import { firebase } from '@react-native-firebase/firestore';

class CardTest extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    componentDidMount(){
        this.getDataCollection();
    }

    getDataDoc = async () => {
        const comodity = await firestore()
            .collection('Komoditas')
            .doc('5IKzMqumIL7DFh7Zausp')
            .get();

            const data = comodity.data();

            console.log(data);
    }

    getDataCollection = async () => {
        const comodities = await firestore().collection('Komoditas').get();
        const allData = comodities.docs.map((doc) => doc.data());
        this.setState=({data: allData})
        console.log(allData);
    }

    render(){
        return(
            <View>
                  <FlatList
                      data={this.state.data}
                      renderItem={({item, index}) => (
                          <View>
                              <Text>{item.jenis_komoditas}</Text>
                              <Text>{item.klasifikasi}</Text>
                              <Text>{item.alamat}</Text>
                          </View>
                      )}
                      keyExtractor={(item) => item.id}
                      removeClippedSubviews={true}
                      
                  />
              </View>
        )
    }
    
}

export default CardTest;