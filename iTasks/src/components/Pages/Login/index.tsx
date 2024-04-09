import React, { useContext, useState } from 'react';
import { ScrollView, View } from 'react-native';
import { useTranslation } from 'react-i18next';

import {ThemeContext} from '../../../storage/context';
import useStyles from './styles';
import TextComponent from '../../Atoms/Text';
import TextButton from '../../Atoms/TextButton';
import ReturnButton from '../../Atoms/ReturnButton';
import SocialNetworkButton from '../../Atoms/SocialNetworkButton';
import LoginForm from '../../Molecules/AuthForms/LoginForm';

const Login: React.FC<any> = ({ navigation }) => {
  const {colors} = useContext(ThemeContext);
  const style = useStyles();
  const {t} = useTranslation();

  return (
    <ScrollView style={style.container}>
      <View style={style.goBack}>
        <ReturnButton />
      </View>

      <View style={style.titles}>
        <TextComponent styles={style.mainTitle}>
          {t('Login.Welcome back')}
        </TextComponent>

        <TextComponent styles={style.subtitle}>
          {t('Login.Get back to your task menagement')}
        </TextComponent>
      </View>

      <LoginForm />

      <View style={style.buttons}>
        <TextComponent styles={style.middleTextButtons}>
          {t('Login.Or')}
        </TextComponent>
        
        <View style={style.socialNetworksButtons}>
          <SocialNetworkButton type='google' color={colors.white} />
          <SocialNetworkButton type='facebook' color={colors.white} />
        </View>
      </View>

      <View style={style.signupTextContainer}>
        <TextComponent styles={style.signupTextButton}>
          {t('Login.Don\'t have an account?')}
        </TextComponent>

        <TextButton onPress={() => navigation.navigate('Signup')}>
          <TextComponent color={colors.white}>
            {t('Login.Signup')}
          </TextComponent>
        </TextButton>
      </View>
    </ScrollView>
  );
}

export default Login;