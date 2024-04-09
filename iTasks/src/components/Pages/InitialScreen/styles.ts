import { StyleSheet, Dimensions } from 'react-native';
import { useContext } from 'react';
import { ThemeContext } from '../../../storage/context';

export const useStyles = () => {
  const {colors} = useContext(ThemeContext);
  const screenDimensions = Dimensions.get('screen');

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.primaryColor,
    },
    titleContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 50,
    },
    avatarContainer: {
      alignItems: 'flex-end',
    },
    avatarImage: {
      height: screenDimensions.height * 0.5,
      width: screenDimensions.width * 0.9,
    },
    buttonsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      paddingVertical: 30,
    },
  });
};
