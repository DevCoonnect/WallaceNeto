import { StyleSheet } from 'react-native';
import { useContext } from 'react';

import { ThemeContext } from '../../../storage/context';
import { ITextButtonStyle } from './types';

const useStyles = (props: ITextButtonStyle) => {
  const {colors} = useContext(ThemeContext);

  return StyleSheet.create({
    text: {
      color: props.color || colors.textPrimaryColor,
      fontWeight: '600',
      textDecorationLine: 'underline',
    },
  });
};

export default useStyles;