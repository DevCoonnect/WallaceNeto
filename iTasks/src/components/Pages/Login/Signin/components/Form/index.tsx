import React, { useContext, useState } from 'react';
import { View } from 'react-native';
import { useTranslation } from 'react-i18next';

import {ThemeContext} from '../../../../../../storage/context';
import useStyles from './styles';
import { onSubmit } from './lib';

import TextComponent from '../../../../../Atoms/Text';
import TextInputComponent from '../../../../../Atoms/TextInput';
import TextButton from '../../../../../Atoms/TextButton';
import ButtonComponent from '../../../../../Atoms/Button';
import AlertComponent from '../../../../../Atoms/Alert';

const LoginForm: React.FC<any> = ({ navigation }) => {
  const {colors} = useContext(ThemeContext);
  const style = useStyles();
  const {t} = useTranslation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alertVisibility, setAlertVisibility] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  return (
    <>
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
            onPress={() => 
              onSubmit({
                email, 
                password, 
                setAlertVisibility, 
                setErrorMsg, 
                navigate: () => navigation.navigate('Home')
              })
            } 
            color={colors.white} 
            textColor={colors.black}
          >
            {t('Login.Login')}
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

export default LoginForm;