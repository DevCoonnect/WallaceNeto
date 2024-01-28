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

export default class Auth extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    stageNew: false,
  };

  signinOrSignup = () => {
    if (this.state.stageNew) {
      Alert.alert('Sucesso!', 'Criar conta');
    } else {
      Alert.alert('Sucesso!', 'Fazer login');
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
