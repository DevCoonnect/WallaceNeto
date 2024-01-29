import React, {Component} from 'react';
import {
  Alert,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import backgroundImage from '../../../assets/imgs/login.jpg';
import styles from './styles';
import AuthInput from '../../components/AuthInput/AuthInput';
import {server, showError, showSuccess} from '../../global/common';
import axios from 'axios';

const initialState = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
  stageNew: false,
};

export default class Auth extends Component {
  state = {...initialState};

  signinOrSignup = () => {
    if (this.state.stageNew) {
      if (this.state.password === this.state.confirmPassword) {
        this.signup();
      } else {
        Alert.alert('Senhas não batem');
      }
    } else {
      Alert.alert('Sucesso!', 'Fazer login');
    }
  };

  signup = async () => {
    try {
      await axios.post(`${server}/signup`, {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
      });

      showSuccess('Usuário cadastrado!');
      this.setState({...initialState});
    } catch (err) {
      showError(err);
    }
  };

  render() {
    return (
      <ImageBackground source={backgroundImage} style={styles.backgorund}>
        <Text style={styles.title}>Tasks</Text>

        <View style={styles.formContainer}>
          <Text style={styles.subtitle}>
            {this.state.stageNew ? 'Crie sua conta' : 'Informe seus dados'}
          </Text>

          {this.state.stageNew && (
            <AuthInput
              icon="user"
              style={styles.input}
              placeholder="Nome"
              value={this.state.name}
              onChangeText={name => this.setState({name})}
            />
          )}

          <AuthInput
            icon="at"
            style={styles.input}
            placeholder="E-mail"
            value={this.state.email}
            onChangeText={email => this.setState({email})}
          />

          <AuthInput
            icon="lock"
            secureTextEntry
            style={styles.input}
            placeholder="Password"
            value={this.state.password}
            onChangeText={password => this.setState({password})}
          />

          {this.state.stageNew && (
            <AuthInput
              icon="lock"
              secureTextEntry
              style={styles.input}
              placeholder="Confirme a senha"
              value={this.state.confirmPassword}
              onChangeText={confirmPassword => this.setState({confirmPassword})}
            />
          )}

          <TouchableOpacity onPress={this.signinOrSignup}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>
                {this.state.stageNew ? 'Registrar' : 'Entrar'}
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          // eslint-disable-next-line react-native/no-inline-styles
          style={{padding: 10}}
          onPress={() => this.setState({stageNew: !this.state.stageNew})}>
          <Text style={styles.buttonText}>
            {this.state.stageNew
              ? 'Já possui conta?'
              : 'Ainda não possui conta?'}
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    );
  }
}
