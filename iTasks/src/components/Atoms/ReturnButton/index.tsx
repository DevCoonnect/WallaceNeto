import React, { useContext } from 'react';
import { TouchableOpacity } from 'react-native';
import { Icon } from '@rneui/base';
import { useTranslation } from 'react-i18next';

import useStyles from './styles';
import TextComponent from '../Text';
import { ThemeContext } from '../../../storage/context';
import { IReturnButtonProps } from './types';

const ReturnButton: React.FC<IReturnButtonProps> = (props) => {
  const {colors} = useContext(ThemeContext);
  const activeColor = props.color || colors.textPrimaryColor;
  const style = useStyles(activeColor);
  const {t} = useTranslation();

  return (
    <TouchableOpacity style={style.container} onPress={props.onPress}>
      <Icon name='arrow-back-ios' color={activeColor} />
      <TextComponent styles={style.text}>
        {t('Go back')}
      </TextComponent>
    </TouchableOpacity>
  );
}

export default ReturnButton;