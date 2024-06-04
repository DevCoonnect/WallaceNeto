import {useContext} from 'react';
import {StyleSheet} from 'react-native';
import {ThemeContext} from '../../../../../../storage/context';

import { ISocialNetworkButtonStyle } from './types';

const useStyles = ({color}: ISocialNetworkButtonStyle) => {
  const {colors} = useContext(ThemeContext);

  return StyleSheet.create({
    button: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 8,
      paddingHorizontal: 20,
      borderWidth: 1,
      borderColor: color || colors.textPrimaryColor,
      borderRadius: 10,
    },
    text: {
      color: color || colors.textPrimaryColor,
      marginLeft: 15,
    },
  });
};

export default useStyles;