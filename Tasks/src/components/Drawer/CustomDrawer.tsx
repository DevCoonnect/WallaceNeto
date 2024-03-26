import React, {useContext} from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {Text, TouchableOpacity, View} from 'react-native';
import Gravatar from '@krosben/react-native-gravatar';
import Icon from 'react-native-vector-icons/FontAwesome';

import axios from 'axios';

import UserContext from '../../context/UserContext';
import styles from './styles';

export default function CustomDrawer(props: any) {
  const {dispatch}: any = useContext(UserContext);
  const {state}: any = useContext(UserContext);

  const logout = () => {
    delete axios.defaults.headers.common.Authorization;
    dispatch({type: 'LOGOUT'});
    props.navigation.navigate('AuthOrApp');
  };

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.header}>
        <Text style={styles.title}>Tasks</Text>

        <View style={styles.avatarContainer}>
          <View style={styles.avatar}>
            <Gravatar email={state.email} defaultImage="mm" />
          </View>
        </View>

        <View style={styles.userInfo}>
          <Text style={styles.name}>{state.name}</Text>
          <Text style={styles.email}>{state.email}</Text>
        </View>

        <TouchableOpacity onPress={logout}>
          <View style={styles.logoutIcon}>
            <Icon name="sign-out" size={30} color="#800" />
          </View>
        </TouchableOpacity>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}
