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
    titles: {
      alignItems: 'center',
      marginTop: 10,
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
    buttons: {
      paddingHorizontal: 26,
      alignItems: 'center',
    },
    middleTextButtons: {
      marginVertical: 20,
      color: colors.white,
    },
    socialNetworksButtons: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    signupTextContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      paddingVertical: 30,
    },
    signupTextButton: {
      marginRight: 5,
      color: colors.white,
    },
  });
};

export default useStyles;