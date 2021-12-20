import auth from '@react-native-firebase/auth';
import { ToastAndroid } from 'react-native';

export default class FirebaseUtil {
    public static signIn = (email: string, password: string) => {
         if(email == null || password == null){
            ToastAndroid.show("Email atau password kosong", 3000);
            return;
        }else{
            return auth().signInWithEmailAndPassword(email, password);
        }
    };
    public static signUp = (email: string, password: string) => {
        return auth().createUserWithEmailAndPassword(email, password);
    };
    public static signOut = () => {
        return auth().signOut();
    };
}