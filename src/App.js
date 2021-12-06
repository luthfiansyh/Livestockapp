import React from 'react';
import {
  View,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Router from './router';
import auth from '@react-native-firebase/auth';
import { AuthContext } from './router/AuthProvider';

const App = ()  =>{

  // const (user, setUser) = useContext(AuthContext);

  // const (initializing, setInitializing) = useState(true);

  // const onAuthStateChanged = (user) => {
  //   setUser(user);
  //   if(initializing) setInitializing(false);
  // }

  // useEffect(() => {
  //   const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
  //   return subscriber;

  // }, []);

  // if(initializing) return null;


  return(
    <View style={{flex:1}}>
      <NavigationContainer>
        <Router/>
      </NavigationContainer>
    </View>

  )
}

const Stack = createNativeStackNavigator();


export default App;
