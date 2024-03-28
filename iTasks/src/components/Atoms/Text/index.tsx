import React from 'react';
import {Text} from 'react-native';

import {ITextProps} from './types';
import {useStyles} from './styles';

const TextComponent = ({children, color, size, bold}: ITextProps) => {
  const style = useStyles({color, size, bold});

  return (
    <Text style={[style.normalText]}>
      {children}
    </Text>
  );
};

export default TextComponent;
