import React, { useContext } from 'react';
import { ScrollView, StatusBar, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Switch } from '@rneui/base';

import {ThemeContext} from '../../../storage/context';
import useStyles from './styles';
import TextComponent from '../../Atoms/Text';
import ButtonComponent from '../../Atoms/Button';
import Avatar from '../../Atoms/Avatar';
import ReturnButton from '../../Atoms/ReturnButton';

const Settings: React.FC<any> = ({ navigation }) => {
  const {colors} = useContext(ThemeContext);
  const style = useStyles();
  const {t} = useTranslation();

  const userName = 'Lucas Calabreso';

  return (
    <>
      <StatusBar backgroundColor={colors.primaryBackground} barStyle='dark-content' />
      <ScrollView style={style.container}>
        <View style={style.header}>
          <ReturnButton onPress={() => navigation.goBack()} />
          <Avatar userName={userName} />
          <TextComponent styles={style.userNameText}>
            {userName}
          </TextComponent>
          <View style={style.divider} />

          <View style={style.content}>
            <View style={style.switchContent}>
              <TextComponent>
                {t('Settings.Change theme')}
              </TextComponent>

              <Switch onChange={() => {}} color={colors.primaryColor} />
            </View>
          </View>

        </View>
        
        <View style={style.bottom}>
          <ButtonComponent 
            flat
            onPress={() => navigation.navigate('Initial')}
            color={colors.secondaryColor}
          >
            <TextComponent color={colors.white}>
              {t('Settings.Logout')}
            </TextComponent>
          </ButtonComponent>
        </View>
      </ScrollView>
    </>
  );
}

export default Settings;