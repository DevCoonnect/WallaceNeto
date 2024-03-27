import React from 'react';
import {Text} from 'react-native';

import {ITextProps} from './types';
import {useStyles} from './styles';

const TextComponent = (props: ITextProps) => {
  const style = useStyles({});

  return <Text style={[style.normalText]}>{props.children}</Text>;
};

export default TextComponent;
