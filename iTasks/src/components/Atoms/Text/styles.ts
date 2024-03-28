import {StyleSheet} from 'react-native';
import {useContext} from 'react';
import {ThemeContext} from '../../../storage/context';

import {IStyleProps} from './types';

export const useStyles = (props: IStyleProps) => {
  const {colors} = useContext(ThemeContext);

  return StyleSheet.create({
    normalText: {
      color: props.color || colors.textPrimaryColor,
      fontSize: props.size || 16,
      fontWeight: props.bold ? "bold" : "normal",
    },
  });
};
