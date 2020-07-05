/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,
    {
     useState,
     useEffect,
    } from 'react';
 
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Dropdown} from '../home-screen/Dropdown';
import {
  HOME,
  SETTINGS,
  HOME_SCREEN,
  SETTINGS_SCREEN
} from '../../constants/strings';

const BottomNavigator = ({
  navigation,
}) => {
console.log("nnngg", navigation)
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate(HOME_SCREEN)}
        style={styles.tab}>
        <Image source={require('../../assets/images/home-25.png')} />
        <Text>{HOME}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate(SETTINGS_SCREEN)}
        style={styles.tab}>
        <Image source={require('../../assets/images/settings-25.png')} />
         <Text>{SETTINGS}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 60,
    alignItems: 'center',
  },
  tab: {
    alignItems: 'center',
  },
});

export default BottomNavigator;
