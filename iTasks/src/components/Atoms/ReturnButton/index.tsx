import React, { useContext } from 'react';
import { TouchableOpacity } from 'react-native';
import { Icon } from '@rneui/base';
import { useTranslation } from 'react-i18next';

import useStyles from './styles';
import TextComponent from '../Text';
import { ThemeContext } from '../../../storage/context';

const ReturnButton: React.FC = () => {
  const {colors} = useContext(ThemeContext);
  const style = useStyles();
  const {t} = useTranslation();

  return (
    <TouchableOpacity style={style.container} onPress={() => {}}>
      <Icon name='arrow-back-ios' color={colors.white} />
      <TextComponent styles={style.text}>
        {t('Go back')}
      </TextComponent>
    </TouchableOpacity>
  );
}

export default ReturnButton;