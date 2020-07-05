
import RNPickerSelect from 'react-native-picker-select';
import React from 'react';
 
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

export const Dropdown = ({currency, currenciesList, setSelectedValue}) => {
  const items = currenciesList && currenciesList.map((element, id) => {
      return {label: element, value: element, key: element}
  });
  if (currenciesList)
    return (
      <RNPickerSelect
        onValueChange={(value) => setSelectedValue(value)}
        Icon={() =>
          <View style={styles.iconContainer}>
            <Text>{currency}</Text>
          </View>
        }
        itemKey={currency}
        items={items}
      />
    );
    else return <Text style={styles.iconContainer}>$</Text>
};


const styles = StyleSheet.create({
  iconContainer: {
    width: 35,
    height: 35,
    position: 'absolute',
    right: -5,
    top: 10,
  },
});

// ;
