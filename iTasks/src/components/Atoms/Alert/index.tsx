import React from 'react';
import { View, Modal } from 'react-native';

import useStyles from './styles';
import { IAlertProps } from './types';

const AlertComponent: React.FC<IAlertProps> = ({children, visibility, type, color}) => {
  const style = useStyles({type, color});

  return (
    <Modal
      transparent
      animationType="slide"
      visible={visibility}
    >
      <View style={style.centeredView}>
        <View style={style.modalView}>
          {children}
        </View>
      </View>
    </Modal>
  );
}

export default AlertComponent;