/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, {
   useState,
   useEffect,
} from 'react';

import {
  StyleSheet,
  View,
  Text,
  TextInput,
} from 'react-native';
import {USD, ENTER_DOLLAR_AMOUNT} from '../../constants/strings';

const USDField = ({setAmount}) => {
  return (
    <View style={styles.usdFieldContainer}>
      <View style={styles.txtContainer}>
        <Text>{USD}</Text>
      </View>
      <View style={{paddingLeft: 8}}>
        <TextInput
          onChangeText={(number)=> setAmount(number)}
          placeholder={ENTER_DOLLAR_AMOUNT}
          keyboardType="numeric"
        />
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
  txtContainer: {
    justifyContent: 'center',
    borderRightWidth: 0.5,
    borderStyle: 'solid',
    paddingRight: 8,
},
});

export default USDField;
