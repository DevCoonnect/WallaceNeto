import { StyleSheet } from 'react-native';
import { IButtonStyle } from './types';

const useStyles = ({color}: IButtonStyle) => {
  return StyleSheet.create({
    button: {
      backgroundColor: color,
      paddingVertical: 18,
      paddingHorizontal: 40,
      borderRadius: 28,
    },
    outlinedButton: {
      paddingVertical: 18,
      paddingHorizontal: 40,
      borderWidth: 2,
      borderColor: color,
      borderRadius: 28,
    },
    flat: {
      borderRadius: 10,
      width: '100%',
      alignItems: 'center',
    },
  });
};

export default useStyles;
