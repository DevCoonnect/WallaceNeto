import {StyleSheet} from 'react-native';
import {useContext} from 'react';
import {ThemeContext} from '../../../storage/context';

const useStyles = () => {
  const {colors} = useContext(ThemeContext);

  return StyleSheet.create({
    container: {
      marginTop: 50,
      paddingHorizontal: 25,
    },
    label: {
      marginBottom: 12,
      color: colors.white,
    },
    field: {
      marginBottom: 20,
    },
    submitButton: {
      marginTop: 50,
    },
    rememberPasswordContainer: {
      alignItems: 'center',
    },
    rememberPassword: {
      fontWeight: 'bold',
      color: colors.white,
    },
  });
};

export default useStyles;