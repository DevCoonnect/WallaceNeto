import React, { useContext }  from 'react';
import { TouchableOpacity } from 'react-native';

import { ThemeContext } from '../../../storage/context';
import { IButtonProps } from './types';
import useStyles from './styles';
import TextComponent from '../Text';

const ButtonComponent: React.FC<IButtonProps> = (props) => {
  const {colors} = useContext(ThemeContext);
  const buttonColor = props.color || colors.primaryColor
  const style = useStyles({color: buttonColor});

  return (
    <TouchableOpacity 
      style={[
        (props.outlined ? style.outlinedButton : style.button), 
        (props.flat ? style.flat : null)
      ]}
      onPress={() => {}}
    >
      <TextComponent bold color={props.textColor || (props.outlined ? buttonColor : colors.white)}>
        {props.children}
      </TextComponent>
    </TouchableOpacity>
  );
}

export default ButtonComponent;