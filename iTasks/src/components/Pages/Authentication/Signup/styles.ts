import {StyleSheet} from 'react-native';
import {useContext} from 'react';
import {ThemeContext} from '../../../../storage/context';

const useStyles = () => {
  const {colors} = useContext(ThemeContext);

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.primaryColor,
    },
    goBack: {
      marginTop: 30,
      marginLeft: 24,
    },
    titles: {
      alignItems: 'center',
      marginTop: 40,
    },
    mainTitle: {
      fontWeight: '600',
      fontSize: 32,
      color: colors.white,
      marginBottom: 12,
    },
    subtitle: {
      color: colors.white,
    },
    loginTextContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      paddingVertical: 30,
    },
    loginTextButton: {
      marginRight: 5,
      color: colors.white,
    },
  });
};

export default useStyles;