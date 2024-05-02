import React, { useContext, useState } from 'react';
import { ScrollView, View } from 'react-native';
import { useTranslation } from 'react-i18next';

import {ThemeContext} from '../../../../storage/context';
import useStyles from './styles';
import TextComponent from '../../../Atoms/Text';
import TextButton from '../../../Atoms/TextButton';
import ReturnButton from '../../../Atoms/ReturnButton';
import SocialNetworkButton from '../../../Atoms/SocialNetworkButton';
import LoginForm from './components/Form';
import Header from '../../../Atoms/Header';

const Signin: React.FC<any> = ({ navigation }) => {
  const {colors} = useContext(ThemeContext);
  const style = useStyles();
  const {t} = useTranslation();

  const showErrorAlert = () => {
    // setErrorMsg(errorMsg);
    // setAlertVisibility(true);
  
    // setTimeout(() => {
    //   setAlertVisibility(false);
    //   setErrorMsg("");
    // }, 2000);
  } 

  return (
    <ScrollView style={style.container}>
      <Header 
        color={colors.primaryColor}
        leftComponent={
          <ReturnButton onPress={() => navigation.navigate('initial')} color={colors.white} />
        }
      />

      <View style={style.titles}>
        <TextComponent styles={style.mainTitle}>
          {t('Signin.Welcome back')}
        </TextComponent>

        <TextComponent styles={style.subtitle}>
          {t('Signin.Get back to your task menagement')}
        </TextComponent>
      </View>

      <LoginForm navigation={navigation} />

      <View style={style.buttons}>
        <TextComponent styles={style.middleTextButtons}>
          {t('Signin.Or')}
        </TextComponent>
        
        <View style={style.socialNetworksButtons}>
          <SocialNetworkButton type='google' color={colors.white} />
          <SocialNetworkButton type='facebook' color={colors.white} />
        </View>
      </View>

      <View style={style.signupTextContainer}>
        <TextComponent styles={style.signupTextButton}>
          {t('Signin.Don\'t have an account?')}
        </TextComponent>

        <TextButton onPress={() => navigation.navigate('signup')}>
          <TextComponent color={colors.white}>
            {t('Signin.Signup')}
          </TextComponent>
        </TextButton>
      </View>
    </ScrollView>
  );
}

export default Signin;