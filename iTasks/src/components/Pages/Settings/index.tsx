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
import Header from '../../Atoms/Header';

const Settings: React.FC<any> = ({ navigation }) => {
  const {colors} = useContext(ThemeContext);
  const style = useStyles();
  const {t} = useTranslation();

  const userName = 'Test Area';

  return (
    <>
      <StatusBar backgroundColor={colors.primaryBackground} barStyle='dark-content' />
      <ScrollView style={style.container}>
        <Header onReturn={() => navigation.goBack()} />

        <View style={style.header}>
          <View style={style.avatarContainer}>
            <Avatar userName={userName} />
          </View>
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
            outlined
            rounded
            onPress={() => navigation.navigate('authentication')}
            color={colors.error}
          >
            {t('Settings.Logout')}
          </ButtonComponent>
        </View>
      </ScrollView>
    </>
  );
}

export default Settings;