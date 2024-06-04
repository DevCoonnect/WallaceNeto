import React, { useContext, useEffect } from 'react';
import { TouchableOpacity, View } from 'react-native';
import Animated, { BounceInDown, BounceInLeft, BounceInUp, BounceOutDown, BounceOutLeft, BounceOutRight, FadeInDown, FadeInUp, FadeOutDown, SlideInLeft, SlideOutLeft, SlideOutRight } from 'react-native-reanimated';
import LinearGradient from 'react-native-linear-gradient';
import { Icon } from '@rneui/base';

import { ThemeContext } from '../../../storage/context';
import useStyles from './styles';
import TextComponent from '../../Atoms/Text';
import { IAlertModalProps } from './types';
import { gradiantColors, selectIcon, iconColor } from './library'

const AlertModal: React.FC<IAlertModalProps> = (props) => {
  const {type, title, children, onClose, timer} = {...props};
  const {colors} = useContext(ThemeContext);
  const style = useStyles();

  useEffect(() => {
    if (timer) {
      setTimeout(() => onClose(), timer);
    }
  });

  return (
    <Animated.View entering={BounceInDown} exiting={BounceOutDown}>
      <LinearGradient colors={gradiantColors(type, colors)} style={style.container}>
        <View style={style.contentContainer}>
          <View style={style.iconContainer}>
            <Icon type='MaterialIcons' name={selectIcon(type)} color={iconColor(type, colors)} size={20} />
          </View>

          <View style={style.textContainer}>
            <TextComponent styles={style.title}>
              {title}
            </TextComponent>

            <TextComponent styles={style.text}>
              {children}
            </TextComponent>
          </View>
        </View>

        <View>
          <TouchableOpacity activeOpacity={0.7} onPress={onClose}>
            <Icon type='MaterialIcons' name='close' size={20} />
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </Animated.View>
  );
}

export default AlertModal;