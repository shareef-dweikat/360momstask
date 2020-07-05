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
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  AsyncStorage,
} from 'react-native';
import {Dropdown} from '../home-screen/Dropdown';
const TargetCurrencyField = ({
  selectedValue,
  setSelectedValue,
  changeRates,
  currenciesList,
  amount,
}) => {
  const CONVERTED_AMOUNT =
    parseFloat(amount) * parseFloat(changeRates && changeRates[selectedValue]);
  return (
    <View style={styles.usdFieldContainer}>
      <View style={styles.dropdownContainer}>
        <Dropdown
          currency={selectedValue}
          setSelectedValue={setSelectedValue}
          changeRates={changeRates}
          currenciesList={currenciesList}
        />
      </View>
      <View style={{paddingLeft: 8, justifyContent: 'center'}}>
        <Text>{CONVERTED_AMOUNT ? CONVERTED_AMOUNT : 0}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  usdFieldContainer: {
    backgroundColor: 'white',
    marginBottom: 16,
    borderRadius: 5,
    padding: 8,
    flexDirection: 'row',
    height: 60,
  },
  dropdownContainer: {
    borderRightWidth: 0.5,
    borderStyle: 'solid',
    paddingRight: 8,
    width: 40,
  },
});

export default TargetCurrencyField;
