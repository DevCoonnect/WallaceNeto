import React from 'react';
import { TouchableOpacity } from 'react-native';

import TextComponent from '../Text';
import useStyles from './styles';
import { ITextButtonProps } from './types';

const TextButton: React.FC<ITextButtonProps> = (props) => {
  const style = useStyles({color: props.color});

  return (
    <TouchableOpacity onPress={props.onPress}>
      <TextComponent styles={style.text}>
        {props.children}
      </TextComponent>
    </TouchableOpacity>
  );
}

export default TextButton;