import React from 'react';
import { View } from 'react-native';

import useStyles from './styles';
import TextComponent from '../Text';
import { IAvatarProps } from './types';

const Avatar: React.FC<IAvatarProps> = ({ userName }) => {
  const style = useStyles();
  const name = userName.split(' ');
  
  return (
    <View>
      <View style={style.background}>
        <TextComponent styles={style.title}>
          {name[0][0]}{name[1] ? name[1][0] : null}
        </TextComponent>
      </View>
    </View>
  );
}

export default Avatar;