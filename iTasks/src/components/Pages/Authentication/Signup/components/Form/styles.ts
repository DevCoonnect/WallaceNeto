import {StyleSheet} from 'react-native';
import {useContext} from 'react';
import {ThemeContext} from '../../../../../../storage/context';

const useStyles = () => {
  const {colors} = useContext(ThemeContext);

  return StyleSheet.create({
    container: {
      marginTop: 50,
      paddingHorizontal: 25,
    },
    field: {
      marginBottom: 20,
    },
    submitButton: {
      marginTop: 60,
    },
  });
};

export default useStyles;