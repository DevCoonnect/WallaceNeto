import React, { useContext } from 'react';
import { Image, View } from 'react-native';
import { useStyles } from './styles';
import { useTranslation } from 'react-i18next';

import { ThemeContext } from '../../../storage/context';
import appName from '../../../assets/img/app-name.png';
import avatar from '../../../assets/img/avatar.png';
import ButtonComponent from '../../Atoms/Button';
import TextButton from '../../Atoms/TextButton';

const InitialScreen: React.FC = () => {
  const {colors} = useContext(ThemeContext);
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
        <ButtonComponent outlined color={colors.white}>
          {t('Login.Signup')}
        </ButtonComponent>

        <ButtonComponent color={colors.white} textColor={colors.black}>
          {t('Login.Login')}
        </ButtonComponent>

      </View>
    </View>
  );
};

export default InitialScreen;
