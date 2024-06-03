import { StyleSheet, useWindowDimensions } from 'react-native';
import { useContext } from 'react';
import { ThemeContext } from '../../../storage/context';


const useStyles = () => {
  const {colors} = useContext(ThemeContext);
  const {width} = useWindowDimensions();

  return StyleSheet.create({
    container: {
      flexDirection: 'row',      
      height: 110,
      width: width * 0.9,
      alignSelf: 'center',
      justifyContent: 'space-between',
      padding: 16,
      borderRadius: 20,
    },
    contentContainer: {
      flexDirection: 'row',
    },
    iconContainer: {
      backgroundColor: 'white',
      borderRadius: 20,
      width: 40,
      height: 40,
      alignItems: 'center',
      justifyContent: 'center',

      shadowColor: '#000',
      elevation: 5,
    },
    textContainer: {
      flexDirection: 'column',
      marginLeft: 20,
    },
    title: {
      fontWeight: 'bold',
      fontSize: 16,
      color: '#000',
    },
    text: {
      color: '#626262',
      fontSize: 14,
      marginTop: 4,
    },
  });
};

export default useStyles;