import React, { useState } from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';
import { Icon } from '@rneui/base';

import { ITextInputProps } from './types';
import useStyles from './styles';

const TextInputComponent: React.FC<ITextInputProps> = (props) => {
  const style = useStyles({color: props.color});
  const [hideText, setHideText] = useState(props.type == 'password');

  const setIcon = () => {
    switch (props.type) {
      case 'email':
        return 'envelope';
      case 'password':
        return 'lock';
      default:
        return 'question';
    }
  };

  return (
    <View style={style.inputContainer}>
      {
        props.icon || props.type 
          ? <Icon type='font-awesome' name={props.icon || setIcon()} color={props.color} /> 
          : null
      }
      <TextInput
        placeholder={props.placeholder}
        placeholderTextColor={props.color}
        defaultValue={props.value}
        onChangeText={newText => props.setValue(newText)}
        autoComplete={props.type == 'email' ? 'email' : undefined}
        secureTextEntry={hideText}
        style={style.text}
      />
      {
        props.type == 'password'
          ? (
            <TouchableOpacity onPress={() => setHideText(!hideText)}>
              <Icon type='font-awesome' name={hideText ? 'eye' : 'eye-slash'} color={props.color} />
            </TouchableOpacity>
          ) : undefined
      }
    </View>
  );
}

export default TextInputComponent;