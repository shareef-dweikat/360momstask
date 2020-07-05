
import RNPickerSelect from 'react-native-picker-select';
import React from 'react';
 
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Picker,
} from 'react-native';

export const Dropdown = ({currency, currenciesList, setSelectedValue}) => {
  const items = currenciesList && currenciesList.map((element, id) => {
      return {label: element, value: element, id}
  });
  return (
    <RNPickerSelect
      onValueChange={(value) => setSelectedValue(value)}
      Icon = {()=>
        <View style={styles.iconContainer}>
          <Text>{currency}</Text>
        </View>
      }
      value={currency}
      items={items}
    />
  );
};


const styles = StyleSheet.create({
  iconContainer: {
    width: 35,
    height: 35,
    position: 'absolute',
    right: 0,
    top: 10,
  },
});

// ;
