import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {Text, View} from 'react-native';
import Gravatar from '@krosben/react-native-gravatar';

import styles from './styles';

export default function CustomDrawer(props: any) {
  const name = 'Teste da Silva';
  const email = 'teste@teste.com';

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.header}>
        <Text style={styles.title}>Tasks</Text>

        <View style={styles.avatarContainer}>
          <View style={styles.avatar}>
            <Gravatar email={email} defaultImage="mm" />
          </View>
        </View>

        <View style={styles.userInfo}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.email}>{email}</Text>
        </View>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}
