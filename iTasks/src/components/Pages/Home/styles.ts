import {StyleSheet} from 'react-native';
import {useContext} from 'react';
import {ThemeContext} from '../../../storage/context';

const useStyles = () => {
  const {colors} = useContext(ThemeContext);

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.primaryBackground,
    },
    header: {
      flexDirection: 'row',
      paddingTop: 40,
      paddingHorizontal: 25,
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    dateText: {
      color: colors.textSubtitleColor,
    },
    userNameText: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    menuButton: {
    },
  });
};

export default useStyles;