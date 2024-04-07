import {StyleSheet} from 'react-native';
import {useContext} from 'react';
import {ThemeContext} from '../../../storage/context';

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
    subtitle: {},
    form: {
      backgroundColor: 'blue',
      marginTop: 50,
      paddingHorizontal: 25,
    },
    buttons: {
      marginTop: 65,
      paddingHorizontal: 26,
      alignItems: 'center',
    },
    middleTextButtons: {
      marginVertical: 25,
      color: colors.white,
    },
    socialNetworksButtons: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    signupTextContainer: {
      flexDirection: 'row',
      alignSelf: 'center',
      marginTop: 50,
    },
    signupTextButton: {
      marginRight: 5,
      color: colors.white,
    },
  });
};

export default useStyles;