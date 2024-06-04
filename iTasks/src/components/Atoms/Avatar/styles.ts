import {StyleSheet} from 'react-native';
import {useContext} from 'react';
import {ThemeContext} from '../../../storage/context';

const useStyles = () => {
  const {colors} = useContext(ThemeContext);

  return StyleSheet.create({
    background: {
      backgroundColor: colors.primaryColor,
      justifyContent: 'center',
      height: 69,
      width: 69,
      borderRadius: 40,
    },
    title: {
      fontWeight: 'bold',
      fontSize: 24,
      color: colors.white,
      alignSelf: 'center',
    },
  });
};

export default useStyles;