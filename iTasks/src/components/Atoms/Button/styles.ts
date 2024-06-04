import { StyleSheet } from 'react-native';
import { IButtonStyle } from './types';

const useStyles = ({color, rounded, outlined}: IButtonStyle) => {
  return StyleSheet.create({
    button: {
      paddingVertical: 18,
      paddingHorizontal: 40,
      alignItems: 'center',

      borderRadius: rounded ? 28 : 10,
      backgroundColor: outlined ? undefined : color,
      borderWidth: outlined ? 2 : 0,
      borderColor: color,
    },
  });
};

export default useStyles;
