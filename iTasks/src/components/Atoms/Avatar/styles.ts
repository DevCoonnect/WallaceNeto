import {StyleSheet} from 'react-native';
import {useContext} from 'react';
import {ThemeContext} from '../../../storage/context';

const useStyles = () => {
  const {colors} = useContext(ThemeContext);

  return StyleSheet.create({
    background: {
      backgroundColor: colors.primaryColor,
      alignSelf: 'center',
      paddingHorizontal: 22,
      paddingVertical: 20,
      borderRadius: 40,
    },
    title: {
      fontWeight: 'bold',
      fontSize: 24,
      color: colors.white,
    },
  });
};

export default useStyles;