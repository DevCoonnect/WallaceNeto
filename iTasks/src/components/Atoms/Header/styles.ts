import {StyleSheet} from 'react-native';
import {useContext} from 'react';
import {ThemeContext} from '../../../storage/context';
import { IHeaderStyle } from './types';

const useStyles = ({color}: IHeaderStyle) => {
  const {colors} = useContext(ThemeContext);

  return StyleSheet.create({
    container: {
      backgroundColor: color || colors.primaryBackground,
      paddingVertical: 20,
      paddingHorizontal: 24,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  });
};

export default useStyles;