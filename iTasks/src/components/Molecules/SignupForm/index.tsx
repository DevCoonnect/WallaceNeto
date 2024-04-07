import React, { useContext, useState } from 'react';
import { View } from 'react-native';
import { useTranslation } from 'react-i18next';

import {ThemeContext} from '../../../storage/context';
import useStyles from './styles';
import TextComponent from '../../Atoms/Text';
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
      <TextComponent styles={style.label}>
        {t('Signup.Name')}
      </TextComponent>
      <View style={style.field}>
        <TextInputComponent 
          value={name} 
          setValue={setName} 
          icon='user' 
          color={colors.white}
        />
      </View>
      
      <TextComponent styles={style.label}>
        {t('Signup.Email')}
      </TextComponent>
      <View style={style.field}>
        <TextInputComponent 
          value={email} 
          setValue={setEmail} 
          type='email' 
          color={colors.white}
        />
      </View>
      
      <TextComponent styles={style.label}>
        {t('Signup.Password')}
      </TextComponent>
      <View style={style.field}>
        <TextInputComponent 
          value={password} 
          setValue={setPassword} 
          type='password' 
          color={colors.white}
        />
      </View>
      
      <TextComponent styles={style.label}>
        {t('Signup.Confirm password')}
      </TextComponent>
      <View style={style.field}>
        <TextInputComponent 
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