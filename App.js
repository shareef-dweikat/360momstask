/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
// import { createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import {createStackNavigator} from 'react-navigation-stack';
import SettingsScreen from './screens/SettingsScreen';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import BottomNavigator from './components/home-tabs/BottomNavigator';
import {LOGIN_SCREEN, HOME_SCREEN, SETTINGS_SCREEN} from './constants/strings';
import { TouchableOpacity } from 'react-native-gesture-handler';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator tabBar={(props)=> <BottomNavigator {...props} />}>
      <Tab.Screen name={HOME_SCREEN}
         component={HomeScreen}
         options={{title:'Home'}}
      />
      <Tab.Screen name={SETTINGS_SCREEN} component={SettingsScreen} />
    </Tab.Navigator>

  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
      }}>
        <Stack.Screen name={LOGIN_SCREEN} component={LoginScreen} />
        <Stack.Screen name={HOME_SCREEN} component={HomeTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
