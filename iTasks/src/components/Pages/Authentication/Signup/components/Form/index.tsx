import React, { useContext, useState } from 'react';
import { View } from 'react-native';
import { useTranslation } from 'react-i18next';

import {ThemeContext} from '../../../../../../storage/context';
import useStyles from './styles';

import TextInputComponent from '../../../../../Atoms/TextInput';
import ButtonComponent from '../../../../../Atoms/Button';
import AlertComponent from '../../../../../Atoms/Alert';
import TextComponent from '../../../../../Atoms/Text';
import { validateFields } from './library';

export const SignupForm: React.FC = () => {
  const {colors} = useContext(ThemeContext);
  const style = useStyles();
  const {t} = useTranslation();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [alertVisibility, setAlertVisibility] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleOnSignup = () => {
    const nameFix = name.trim();
    const emailFix = email.trim().toLowerCase();
    let [error, errorMsg] = validateFields(nameFix, emailFix, password, confirmPassword);
  
    if (error) {
      // showErrorAlert(errorMsg.toString(), props);
    } else {
      console.log('Name: ' + nameFix + '\n' + 'Email: ' + emailFix + '\n' + 'Password: ' + password);
    }
  }

  return (
    <>
      <View style={style.container}>
        <View style={style.field}>
          <TextInputComponent
            placeholder={t('Signup.Name')}
            value={name} 
            setValue={setName} 
            icon='user' 
            color={colors.white}
          />
        </View>
        
        <View style={style.field}>
          <TextInputComponent 
            placeholder={t('Signup.Email')}
            value={email} 
            setValue={setEmail} 
            type='email' 
            color={colors.white}
          />
        </View>
        
        <View style={style.field}>
          <TextInputComponent
            placeholder={t('Signup.Password')}
            value={password} 
            setValue={setPassword} 
            type='password' 
            color={colors.white}
          />
        </View>

        <View style={style.field}>
          <TextInputComponent
            placeholder={t('Signup.Confirm password')}
            value={confirmPassword} 
            setValue={setConfirmPassword} 
            type='password' 
            color={colors.white}
          />
        </View>

        <View style={style.submitButton}>
          <ButtonComponent
            onPress={handleOnSignup} 
            color={colors.white} 
            textColor={colors.black}
          >
            {t('Signup.Signup')}
          </ButtonComponent>
        </View>
      </View>

      <AlertComponent type='error' visibility={alertVisibility}>
        <TextComponent color={colors.white}>
          {t(errorMsg)}
        </TextComponent>
      </AlertComponent>
    </>
  );
}
