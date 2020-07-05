import {
    AsyncStorage,
  } from 'react-native';

  
export const isUserSignIn = async () =>{
    let auth;
    try {
        auth = await AsyncStorage.getItem('auth')
    } catch (error) {
        console.log("utils: async error:", error)
    }

    return auth
}