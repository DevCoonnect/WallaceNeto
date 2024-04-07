import React, { useContext } from 'react';
import { View } from 'react-native';
import { useTranslation } from 'react-i18next';

import {ThemeContext} from '../../../storage/context';
import useStyles from './styles';
import TextComponent from '../../Atoms/Text';
import ButtonComponent from '../../Atoms/Button';
import TextButton from '../../Atoms/TextButton';
import ReturnButton from '../../Atoms/ReturnButton';
import SocialNetworkButton from '../../Atoms/SocialNetworkButton';
import TextInputComponent from '../../Atoms/TextInput';

const Login: React.FC = () => {
  const {colors} = useContext(ThemeContext);
  const style = useStyles();
  const {t} = useTranslation();

  return (
    <View style={style.container}>
      <View style={style.goBack}>
        <ReturnButton />
      </View>

      <View style={style.titles}>
        <TextComponent styles={style.mainTitle}>
          {t('Login.Welcome back')}
        </TextComponent>

        <TextComponent color={colors.white}>
          {t('Login.Get back to your task menagement')}
        </TextComponent>
      </View>

      <View style={style.form}>
        <TextComponent color={colors.white}>
          {t('Login.Email')}
        </TextComponent>
        <TextInputComponent type='email' color={colors.white} />
        
        <TextComponent color={colors.white}>
        {t('Login.Password')}
        </TextComponent>
        <TextInputComponent type='password' color={colors.white} />
      </View>

      <View style={style.buttons}>
        <ButtonComponent 
          flat 
          onPress={() => {}} 
          color={colors.white} 
          textColor={colors.black}
        >
          {t('Login.Login')}
        </ButtonComponent>

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

        <TextButton onPress={() => {}}>
          <TextComponent color={colors.white}>
            {t('Login.Signup')}
          </TextComponent>
        </TextButton>
      </View>
    </View>
  );
}

export default Login;