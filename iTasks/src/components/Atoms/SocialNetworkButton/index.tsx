import React, { useContext } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { Icon } from '@rneui/base';

import { ISocialNetworkButtonProps } from './types';
import useStyles from './styles';
import { ThemeContext } from '../../../storage/context';

const SocialNetworkButton: React.FC<ISocialNetworkButtonProps> = ({color, type}) => {
  const {colors} = useContext(ThemeContext);
  const style = useStyles({color});

  return (
    <TouchableOpacity onPress={() => {}} style={style.button} activeOpacity={0.7}>
      <Icon name={type} type='font-awesome' color={color || colors.textPrimaryColor} />
      <Text style={style.text}>
        {type.charAt(0).toUpperCase() + type.slice(1)}
      </Text>
    </TouchableOpacity>
  );
}

export default SocialNetworkButton;