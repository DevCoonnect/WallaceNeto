import {StyleSheet} from 'react-native';
import {useContext} from 'react';

import {ThemeContext} from '../../../storage/context';
import { ITextButtonStyle } from './types';

const useStyles = ({color}: ITextButtonStyle) => {
  const {colors} = useContext(ThemeContext);

  return StyleSheet.create({
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      width: '100%',
      paddingLeft: 12,
      borderWidth: 1.5,
      borderColor: color || colors.textPrimaryColor,
      borderRadius: 12,
    },
    text: {
      width: '80%',
      marginLeft: 10,
      color: color || colors.textPrimaryColor,
      fontSize: 16,
    },
  });
};

export default useStyles;