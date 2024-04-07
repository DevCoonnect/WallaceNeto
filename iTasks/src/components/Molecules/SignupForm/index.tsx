import React, { useContext, useState } from 'react';
import { View } from 'react-native';
import { useTranslation } from 'react-i18next';

import {ThemeContext} from '../../../storage/context';
import useStyles from './styles';
import TextInputComponent from '../../Atoms/TextInput';
import TextButton from '../../Atoms/TextButton';
import ButtonComponent from '../../Atoms/Button';

const SignupForm: React.FC = () => {
  const {colors} = useContext(ThemeContext);
  const style = useStyles();
  const {t} = useTranslation();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onSubmit = () => {
    const nameFix = name.trim();
    const emailFix = email.trim().toLowerCase();
    let [error, errorMsg] = validateFields(nameFix, emailFix, password, confirmPassword);

    if (error) {
      console.warn(errorMsg);
    } else {
      console.log('Name: ' + nameFix + '\n' + 'Email: ' + emailFix + '\n' + 'Password: ' + password);
    }
  }

  const validateFields = (name: string, email: string, password: string, confirmPassword: string) => {
    if (name === '' || email === '' || password === '') {
      return [true, 'Please fill all the fields!'];
    }
    if (name.length < 4) {
      return [true, 'Name must have at least 4 characters'];
    }
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!email.match(re)) {
      return [true, 'Invalid email'];
    }
    if (password.length < 6) {
      return [true, 'Password must have at least 6 characters'];
    }
    if (password !== confirmPassword) {
      return [true, 'Passwords must match'];
    }

    return [false, ''];
  }

  return (
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
          flat 
          onPress={() => onSubmit()} 
          color={colors.white} 
          textColor={colors.black}
        >
          {t('Signup.Signup')}
        </ButtonComponent>
      </View>
    </View>
  );
}

export default SignupForm;