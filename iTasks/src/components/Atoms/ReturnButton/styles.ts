import {StyleSheet} from 'react-native';
import {useContext} from 'react';
import {ThemeContext} from '../../../storage/context';

const useStyles = () => {
  const {colors} = useContext(ThemeContext);

  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    text: {
      color: colors.white,
      marginLeft: 5,
      fontSize: 20,
    },
  });
};

export default useStyles;