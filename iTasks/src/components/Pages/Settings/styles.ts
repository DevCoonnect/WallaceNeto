import {StyleSheet} from 'react-native';
import {useContext} from 'react';
import {ThemeContext} from '../../../storage/context';

const useStyles = () => {
  const {colors} = useContext(ThemeContext);

  return StyleSheet.create({
    container: {
      backgroundColor: colors.primaryBackground,
      alignContent: 'space-between',
    },
    header: {
      padding: 25,
    },
    userNameText: {
      textAlign: 'center',
      marginTop: 20,
      fontSize: 24,
      fontWeight: 'bold',
    },
    divider: {
      backgroundColor: colors.primaryColor,
      marginTop: 25,
      paddingHorizontal: 26,
      height: 7,
      borderRadius: 8,
    },
    content: {
      paddingHorizontal: 26,
      paddingTop: 40,
      paddingBottom: 20,
    },
    switchContent: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    bottom: {
      paddingHorizontal: 25,
      marginTop: 40,
    },
  });
};

export default useStyles;