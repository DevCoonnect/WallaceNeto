import React, { useContext } from 'react';
import { TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Icon } from '@rneui/base';

import { ThemeContext } from '../../../storage/context';
import useStyles from './styles';
import TextComponent from '../../Atoms/Text';
import { IAlertModalProps } from './types';
import { gradiantColors, selectIcon, iconColor } from './library'

const AlertModal: React.FC<IAlertModalProps> = ({type, title, content}) => {
  const {colors} = useContext(ThemeContext);
  const style = useStyles();

  return (
    <LinearGradient colors={gradiantColors(type, colors)} style={style.container}>
      <View style={style.contentContainer}>
        <View style={style.iconContainer}>
          <Icon type='MaterialIcons' name={selectIcon(type)} color={iconColor(type, colors)} />
        </View>

        <View style={style.textContainer}>
          <TextComponent styles={style.title}>
            {title}
          </TextComponent>

          <TextComponent styles={style.text}>
            {content}
          </TextComponent>
        </View>
      </View>

      <View>
        <TouchableOpacity activeOpacity={0.7}>
          <Icon type='MaterialIcons' name='close' size={20} />
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

export default AlertModal;