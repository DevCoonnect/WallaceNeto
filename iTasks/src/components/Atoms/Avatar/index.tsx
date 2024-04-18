import React from 'react';
import { View } from 'react-native';

import useStyles from './styles';
import TextComponent from '../Text';
import { IAvatarProps } from './types';

const Avatar: React.FC<IAvatarProps> = ({ userName }) => {
  const style = useStyles();

  return (
    <View>
      <View style={style.background}>
        <TextComponent styles={style.title}>
          {`${userName.split(' ')[0][0]}${userName.split(' ')[1][0]}`}
        </TextComponent>
      </View>
    </View>
  );
}

export default Avatar;