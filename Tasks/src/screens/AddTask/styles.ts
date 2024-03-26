import {ColorValue, StyleSheet} from 'react-native';

import commonStyles from '../../global/commonStyles';

const styles = (color: ColorValue) =>
  StyleSheet.create({
    background: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      justifyContent: 'center',
    },
    container: {
      backgroundColor: '#fff',
      marginHorizontal: 20,
      borderRadius: 8,
    },
    header: {
      fontFamily: commonStyles.fontFamily,
      backgroundColor: color,
      color: commonStyles.colors.secondary,
      borderTopLeftRadius: 8,
      borderTopRightRadius: 8,
      textAlign: 'center',
      padding: 15,
      fontSize: 18,
    },
    input: {
      fontFamily: commonStyles.fontFamily,
      height: 40,
      margin: 15,
      backgroundColor: '#fff',
      borderWidth: 1,
      borderColor: '#E3E3E3',
      borderRadius: 6,
    },
    buttons: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
    },
    button: {
      margin: 20,
      marginRight: 30,
      color: color,
    },
    date: {
      fontFamily: commonStyles.fontFamily,
      fontSize: 20,
      marginLeft: 15,
    },
  });

export default styles;
