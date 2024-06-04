import React, {useContext, useEffect} from 'react';
import {ActivityIndicator, View} from 'react-native';

import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

import UserContext from '../../context/UserContext';
import styles from './styles';

export default function AuthOrApp(props: any) {
  const {state, dispatch}: any = useContext(UserContext);

  useEffect(() => {
    const fetchData = async () => {
      const userDataJson = await AsyncStorage.getItem('userData');
      let userData = null;

      try {
        userData = JSON.parse(userDataJson!);
      } catch (e) {
        console.warn(e);
      }

      if (userData && userData.token) {
        axios.defaults.headers.common.Authorization = `bearer ${userData.token}`;
        dispatch({
          type: 'LOGIN',
          payload: userData,
        });
        props.navigation.navigate('Home');
      } else {
        props.navigation.navigate('Auth');
      }
    };

    fetchData();
  }, [dispatch, props.navigation, state.token]);

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" />
    </View>
  );
}
