import React, { useContext } from 'react';
import { Image, ScrollView, View } from 'react-native';
import { useStyles } from './styles';
import { useTranslation } from 'react-i18next';

import { ThemeContext } from '../../../storage/context';
import appName from '../../../assets/img/app-name.png';
import avatar from '../../../assets/img/avatar.png';
import ButtonComponent from '../../Atoms/Button';

const InitialScreen: React.FC<any> = ({ navigation }) => {
  const {colors} = useContext(ThemeContext);
  const styles = useStyles();
  const {t} = useTranslation();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.titleContainer}>
        <Image source={appName} />
      </View>

      <View style={styles.avatarContainer}>
        <Image source={avatar} style={styles.avatarImage} />
      </View>

      <View style={styles.buttonsContainer}>
        <ButtonComponent 
          outlined 
          color={colors.white} 
          onPress={() => navigation.navigate('Signup')}
        >
          {t('Login.Signup')}
        </ButtonComponent>

        <ButtonComponent 
          color={colors.white} 
          textColor={colors.black} 
          onPress={() => navigation.navigate('Login')}
        >
          {t('Login.Login')}
        </ButtonComponent>

      </View>
    </ScrollView>
  );
};

export default InitialScreen;
