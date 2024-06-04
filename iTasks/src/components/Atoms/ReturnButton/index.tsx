import React, { useContext } from 'react';
import { TouchableOpacity } from 'react-native';
import { Icon } from '@rneui/base';
import { useTranslation } from 'react-i18next';

import useStyles from './styles';
import TextComponent from '../Text';
import { ThemeContext } from '../../../storage/context';
import { IReturnButtonProps } from './types';

const ReturnButton: React.FC<IReturnButtonProps> = ({color, onPress}) => {
  const {colors} = useContext(ThemeContext);
  const activeColor = color || colors.textPrimaryColor;
  const style = useStyles({color: activeColor});
  const {t} = useTranslation();

  return (
    <TouchableOpacity style={style.container} onPress={onPress} activeOpacity={0.7}>
      <Icon name='arrow-back-ios' color={activeColor} />
      <TextComponent styles={style.text}>
        {t('Go back')}
      </TextComponent>
    </TouchableOpacity>
  );
}

export default ReturnButton;