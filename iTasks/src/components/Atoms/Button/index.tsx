import React, { useContext }  from 'react';
import { TouchableOpacity } from 'react-native';

import { ThemeContext } from '../../../storage/context';
import { IButtonProps } from './types';
import useStyles from './styles';
import TextComponent from '../Text';

const ButtonComponent: React.FC<IButtonProps> = (props) => {
  const {children, onPress, outlined, color, rounded, textColor, disabled} = {...props};

  const {colors} = useContext(ThemeContext);
  const buttonColor = color || colors.primaryColor
  const style = useStyles({color: buttonColor , rounded, outlined});
  const disabledStyle = disabled ? {opacity: 0.7} : null;

  return (
    <TouchableOpacity 
      style={[style.button, disabledStyle]}
      onPress={onPress}
      activeOpacity={0.7}
      disabled={disabled}
    >
      <TextComponent bold color={textColor || (outlined ? buttonColor : colors.white)}>
        {children}
      </TextComponent>
    </TouchableOpacity>
  );
}

export default ButtonComponent;