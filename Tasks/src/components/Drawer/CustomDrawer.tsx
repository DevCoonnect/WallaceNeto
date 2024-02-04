import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {View, Text} from 'react-native';

import styles from './styles';

export default function CustomDrawer(props: any) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.header}>
        <Text>Header</Text>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}
