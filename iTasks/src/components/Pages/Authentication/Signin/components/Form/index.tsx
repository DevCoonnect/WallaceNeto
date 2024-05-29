import React, { useContext, useState } from 'react';
import { View } from 'react-native';
import { useTranslation } from 'react-i18next';

import { ThemeContext } from '../../../../../../storage/context';
import useStyles from './styles';
import { validateFields } from './library';

import TextComponent from '../../../../../Atoms/Text';
import TextInputComponent from '../../../../../Atoms/TextInput';
import TextButton from '../../../../../Atoms/TextButton';
import ButtonComponent from '../../../../../Atoms/Button';

export const SigninForm: React.FC<any> = ({ navigation }) => {
  const {colors} = useContext(ThemeContext);
  const style = useStyles();
  const {t} = useTranslation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <View style={style.container}>
        <View style={style.field}>
          <TextInputComponent
            placeholder={t('Signin.Email')}
            value={email} 
            setValue={setEmail} 
            type='email' 
            color={colors.white}
          />
        </View>
        
        <View style={style.field}>
          <TextInputComponent
            placeholder={t('Signin.Password')}
            value={password} 
            setValue={setPassword} 
            type='password' 
            color={colors.white}
          />
        </View>

        <View style={style.rememberPasswordContainer}>
          <TextButton onPress={() => {}}>
            <TextComponent styles={style.rememberPassword}>
              {t('Signin.Remember my password')}
            </TextComponent>
          </TextButton>        
        </View>

        <View style={style.submitButton}>
          <ButtonComponent
            onPress={() => navigation.navigate('main')} 
            color={colors.white} 
            textColor={colors.black}
            disabled={validateFields({email, password})}
          >
            {t('Signin.Signin')}
          </ButtonComponent>
        </View>
      </View>
    </>
  );
}
