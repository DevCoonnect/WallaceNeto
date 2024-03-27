import React from 'react';
import {Image, View} from 'react-native';
import {useStyles} from './styles';
import {useTranslation} from 'react-i18next';

import appName from '../../../assets/img/app-name.png';
import avatar from '../../../assets/img/avatar.png';
import TextComponent from '../../Atoms/Text';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const InitialScreen: React.FC = (props) => {
  const styles = useStyles();
  const {t} = useTranslation();

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Image source={appName} />
      </View>
      <View style={styles.avatarContainer}>
        <Image source={avatar} style={styles.avatarImage} />
      </View>
      <View style={styles.buttonsContainer}>
        <TextComponent>{t('Login.Signup')}</TextComponent>
        <TextComponent>{t('Login.Login')}</TextComponent>
      </View>
    </View>
  );
};

export default InitialScreen;
