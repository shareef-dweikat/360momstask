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
    } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  AsyncStorage,
} from 'react-native';
import { InvalidLoginsModal } from '../components/login-screen/InvalidLoginsModal';
import {
  USERNAME,
  PASSWORD,
  LOGIN,
  ADMIN,
  PASS,
  AUTH,
  HOME_SCREEN,
} from '../constants/strings';

const HomeScreen = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isInvalidLoginsModalActive, setIsInvalidLoginsModalActive] = useState(false);
  const handleLogIn = () => {
    if (username === ADMIN && password === PASS) {
      AsyncStorage.setItem(AUTH, false);
      navigation.navigate(HOME_SCREEN);
    } else setIsInvalidLoginsModalActive(true);
  }
  return (
    <View style={styles.container}>
      <View style={styles.usdFieldContainer}>
        <TextInput
          onChangeText={(number)=> setUsername(number)}
          placeholder={USERNAME}
          value={username}
          style={styles.inputField}
        />
      </View>
      <View style={styles.usdFieldContainer}>
        <TextInput
          onChangeText={(number)=> setPassword(number)}
          placeholder={PASSWORD}
          value={password}
          style={styles.inputField}
          secureTextEntry={true}
        />
      </View>
      <TouchableOpacity onPress={() => handleLogIn()} style={styles.btn}>
        <Text style={styles.btnText}>{LOGIN}</Text>
      </TouchableOpacity>
      <InvalidLoginsModal
        setIsInvalidLoginsModalActive={setIsInvalidLoginsModalActive}
        visibile={isInvalidLoginsModalActive}
      />
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
  btn: {
    backgroundColor: 'white',
    alignSelf: 'center',
    marginTop: 16,
    width: 80,
    height: 40,
    justifyContent: 'center',
    borderRadius: 10,
  },
  btnText: {
    textAlign: 'center',
  },
  inputField: {
    width: '100%',
  },
});

export default HomeScreen;
