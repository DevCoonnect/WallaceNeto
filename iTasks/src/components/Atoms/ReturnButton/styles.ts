import { StyleSheet } from 'react-native';
import { useContext } from 'react';

import { ThemeContext } from '../../../storage/context';
import { IReturnButtonStyle } from './types';

const useStyles = ({color}: IReturnButtonStyle) => {
  const {colors} = useContext(ThemeContext);

  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    text: {
      color: color || colors.textPrimaryColor,
      marginLeft: 5,
      fontSize: 20,
    },
  });
};

export default useStyles;