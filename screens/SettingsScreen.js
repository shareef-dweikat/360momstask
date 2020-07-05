/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  AsyncStorage,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import {LOGOUT, LOGIN_SCREEN, AUTH} from '../constants/strings';
const SettingsScreen = ({navigation}) => {
  const handleLogout = () => {
    AsyncStorage.setItem(AUTH, false);
    navigation.navigate(LOGIN_SCREEN);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => handleLogout()}>
        <Text style={styles.logoutTxt}>{LOGOUT}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#586d79',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoutTxt: {
    fontSize: 22,
    color: 'white',
  },
});

export default SettingsScreen;
