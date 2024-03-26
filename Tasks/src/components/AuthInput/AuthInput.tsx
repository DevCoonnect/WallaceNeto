import React from 'react';
import {StyleProp, TextInput, View, ViewStyle} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

type AuthInputProps = {
  icon: string;
  style?: StyleProp<ViewStyle>;
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  secureTextEntry?: boolean;
};

export default function AuthInput(props: AuthInputProps) {
  return (
    <View style={[styles.container, props.style]}>
      <Icon name={props.icon} size={20} style={styles.icon} />
      <TextInput {...props} style={styles.input} />
    </View>
  );
}
