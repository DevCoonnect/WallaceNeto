import React, {Component} from 'react';
import {ActivityIndicator, View} from 'react-native';

import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from './styles';

export default class AuthOrApp extends Component<any> {
  componentDidMount = async () => {
    const userDataJson = await AsyncStorage.getItem('userData');
    let userData = null;

    try {
      userData = JSON.parse(userDataJson!);
    } catch (e) {
      console.warn(e);
    }

    if (userData && userData.token) {
      axios.defaults.headers.common.Authorization = `bearer ${userData.token}`;
      this.props.navigation.navigate('Home');
    } else {
      this.props.navigation.navigate('Auth');
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
}
