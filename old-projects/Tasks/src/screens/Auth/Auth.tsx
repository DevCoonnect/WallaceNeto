/* eslint-disable react-native/no-inline-styles */
import React, {useContext, useState} from 'react';
import {ImageBackground, Text, TouchableOpacity, View} from 'react-native';
import axios from 'axios';

import styles from './styles';
import validateFormField from './validateFormFunctions';
import UserContext from '../../context/UserContext';
import backgroundImage from '../../../assets/imgs/login.jpg';
import AuthInput from '../../components/AuthInput/AuthInput';
import {server, showError, showSuccess} from '../../global/common';

const initialState = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
  stageNew: false,
};

export default function Auth(props: any) {
  const {dispatch}: any = useContext(UserContext);
  const [user, setUser] = useState(initialState);
  const formValidation = validateFormField(user);

  const signinOrSignup = () => {
    if (user.stageNew) {
      signup();
    } else {
      signin();
    }
  };

  const signup = async () => {
    try {
      await axios.post(`${server}/signup`, {
        name: user.name,
        email: user.email,
        password: user.password,
      });

      showSuccess('Usuário cadastrado!');
      setUser({...initialState});
    } catch (e) {
      showError(e);
    }
  };

  const signin = async () => {
    try {
      const res = await axios.post(`${server}/signin`, {
        email: user.email,
        password: user.password,
      });

      axios.defaults.headers.common.Authorization = `bearer ${res.data.token}`;
      dispatch({
        type: 'LOGIN',
        payload: res.data,
      });
      props.navigation.navigate('Home');
    } catch (e) {
      showError(e);
    }
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.backgorund}>
      <Text style={styles.title}>Tasks</Text>

      <View style={styles.formContainer}>
        <Text style={styles.subtitle}>
          {user.stageNew ? 'Crie sua conta' : 'Informe seus dados'}
        </Text>

        {user.stageNew && (
          <AuthInput
            icon="user"
            style={styles.input}
            placeholder="Nome"
            value={user.name}
            onChangeText={name => setUser({...user, name})}
          />
        )}

        <AuthInput
          icon="at"
          style={styles.input}
          placeholder="E-mail"
          value={user.email}
          onChangeText={email => setUser({...user, email})}
        />

        <AuthInput
          icon="lock"
          secureTextEntry
          style={styles.input}
          placeholder="Password"
          value={user.password}
          onChangeText={password => setUser({...user, password})}
        />

        {user.stageNew && (
          <AuthInput
            icon="lock"
            secureTextEntry
            style={styles.input}
            placeholder="Confirme a senha"
            value={user.confirmPassword}
            onChangeText={confirmPassword =>
              setUser({...user, confirmPassword})
            }
          />
        )}

        <TouchableOpacity onPress={signinOrSignup} disabled={!formValidation}>
          <View
            style={[
              styles.button,
              formValidation ? {} : {backgroundColor: '#AAA'},
            ]}>
            <Text style={styles.buttonText}>
              {user.stageNew ? 'Registrar' : 'Entrar'}
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={{padding: 10}}
        onPress={() => setUser({...user, stageNew: !user.stageNew})}>
        <Text style={styles.buttonText}>
          {user.stageNew ? 'Já possui conta?' : 'Ainda não possui conta?'}
        </Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}
