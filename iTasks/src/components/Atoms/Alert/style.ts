import {StyleSheet} from 'react-native';
import {useContext} from 'react';

import {ThemeContext} from '../../../storage/context';
import { IAlertStyle } from './types';

const useStyles = ({type, color}: IAlertStyle) => {
  const {colors} = useContext(ThemeContext);

  const getBackgroundColor = () => {
    if (color) return color;
    switch (type) {
      case 'error':
        return colors.error;
      case 'success':
        return colors.sucess;    
      default:
        return colors.secondaryColor;
    }
  }

  return StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    modalView: {
        backgroundColor: getBackgroundColor(),
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        marginHorizontal: 20,
        borderRadius: 8,
        paddingVertical: 16,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
  });
};

export default useStyles;