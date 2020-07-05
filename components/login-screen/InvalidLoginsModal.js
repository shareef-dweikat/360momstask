

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
  Modal,
  TouchableOpacity,
} from 'react-native';
import {INVALIDR_LOGINS, OK} from '../../constants/strings';

export const InvalidLoginsModal = ({
  visibile,
  setIsInvalidLoginsModalActive,
}) => {
  return (
    <Modal transparent={true} visible={visibile}>
      <View style={styles.container}>
        <Text style={styles.messageTxt}>{INVALIDR_LOGINS}</Text>
        <TouchableOpacity
          onPress={()=> setIsInvalidLoginsModalActive(false)} 
          style={styles.btn}>
          <Text style={styles.btnTxt}>{OK}</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 100,
    alignSelf: 'center',
    position: 'absolute',
    top: '30%',
    backgroundColor: 'gray',
    borderRadius: 10,
    padding: 8,
  },
  btn: {
    width: 25,
    height: 25,
    alignSelf: 'center',
  },
  btnTxt: {
    color: 'white',
  },
  messageTxt: {
    color: 'white',
    height: 60,
  },
});
