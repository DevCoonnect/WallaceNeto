import {Alert, Platform} from 'react-native';

const server =
  Platform.OS === 'ios' ? 'http://localhost:3000' : 'http://10.0.2.2:3000';

function showError(err: any) {
  if (err.response && err.response.data) {
    Alert.alert('Ops! Ocorreu um problema!', `Mensagem: ${err.response.data}`);
  } else {
    Alert.alert('Ops! Ocorreu um problema!', `Mensagem: ${err}`);
  }
}

function showSuccess(msg: any) {
  Alert.alert(msg);
}

export {server, showError, showSuccess};
