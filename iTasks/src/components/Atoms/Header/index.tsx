import React from 'react';
import { View } from 'react-native';

import useStyles from './styles';
import { IHeaderProps } from './types';
import ReturnButton from '../ReturnButton';

const Header: React.FC<IHeaderProps> = ({onReturn, color, leftComponent, rightComponent}) => {
  const style = useStyles({color});

  return (
    <View style={style.container}>
      <View>
        {
          onReturn 
            ? <ReturnButton onPress={onReturn} />
            : leftComponent
        }
      </View>
      
      <View>
        { rightComponent }
      </View>
    </View>
  );
}

export default Header;