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
    console.log('Name: ' + name + '\n' + 'Email: ' + email + '\n' + 'Password: ' + password);
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