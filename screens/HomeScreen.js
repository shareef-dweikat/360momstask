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

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {isUserSignIn} from '../utils/isUserSignIn';
import { Dropdown } from '../components/home-screen/Dropdown';
import USDField from '../components/home-screen/USDField';
import TargetCurrencyField from '../components/home-screen/TargetCurrencyField';
import {getcurrencies} from '../requests';
import {ONE_DOLLAR_EQUALS, AS_OF, LOGIN_SCREEN} from '../constants/strings';

const HomeScreen = ({navigation}) => {
  if (!isUserSignIn) navigation.navigate(LOGIN_SCREEN);
  const [changeRates, setChangeRates] = useState();
  const [amount, setAmount] = useState(0);
  const [selectedValue, setSelectedValue] = useState('ILS');
  useEffect(() => {
    getcurrencies(setChangeRates);
  }, []);
  let currenciesList = changeRates && Object.keys(changeRates);
  let value = changeRates && changeRates[selectedValue];
  const conversionRate = `${ONE_DOLLAR_EQUALS} ${value} ${selectedValue} ${AS_OF} ${new Date().toDateString()}`;
  return (
    <View style={styles.container}>
      <USDField setAmount={setAmount} />
      <TargetCurrencyField
        amount={amount}
        selectedValue={selectedValue}
        setSelectedValue={setSelectedValue}
        changeRates={changeRates}
        currenciesList={currenciesList}
      />
      <Text style={styles.conversionRate}>{conversionRate}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#586d79',
    height: '100%',
    justifyContent: 'center',
    padding: 17,
  },
  usdFieldContainer: {
    backgroundColor: 'white',
    marginBottom: 16,
    borderRadius: 5,
    padding: 8,
    flexDirection: 'row',
    height: 60,
  },
  conversionRate: {
    textAlign: 'center',
    color: 'white',
  },
});

export default HomeScreen;
