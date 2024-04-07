import React, { useContext, useState } from 'react';
import { View } from 'react-native';
import { useTranslation } from 'react-i18next';

import {ThemeContext} from '../../../../storage/context';
import useStyles from '../styles';
import { onSubmit } from './lib';

import TextComponent from '../../../Atoms/Text';
import TextInputComponent from '../../../Atoms/TextInput';
import TextButton from '../../../Atoms/TextButton';
import ButtonComponent from '../../../Atoms/Button';

const LoginForm: React.FC = () => {
  const {colors} = useContext(ThemeContext);
  const style = useStyles();
  const {t} = useTranslation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={style.container}>
      <View style={style.field}>
        <TextInputComponent
          placeholder={t('Login.Email')}
          value={email} 
          setValue={setEmail} 
          type='email' 
          color={colors.white}
        />
      </View>
      
      <View style={style.field}>
        <TextInputComponent
          placeholder={t('Login.Password')}
          value={password} 
          setValue={setPassword} 
          type='password' 
          color={colors.white}
        />
      </View>

      <View style={style.rememberPasswordContainer}>
        <TextButton onPress={() => {}}>
          <TextComponent styles={style.rememberPassword}>
            {t('Login.Remember my password')}
          </TextComponent>
        </TextButton>        
      </View>

      <View style={style.submitButton}>
        <ButtonComponent 
          flat 
          onPress={() => onSubmit({email, password})} 
          color={colors.white} 
          textColor={colors.black}
        >
          {t('Login.Login')}
        </ButtonComponent>
      </View>
    </View>
  );
}

export default LoginForm;