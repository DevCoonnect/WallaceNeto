import React, {useContext} from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {Text, View} from 'react-native';
import Gravatar from '@krosben/react-native-gravatar';

import UserContext from '../../context/UserContext';
import styles from './styles';

export default function CustomDrawer(props: any) {
  const {state}: any = useContext(UserContext);

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
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}
