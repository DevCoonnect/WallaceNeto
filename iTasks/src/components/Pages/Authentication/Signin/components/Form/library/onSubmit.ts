type IOnSubmitProps = {
  email: string;
  password: string;
  navigate: () => void;
}

export const onSubmit = (props: IOnSubmitProps) => {
  const {email, password, navigate} = props;
  let [error, errorMsg] = validateFields(email.trim(), password);
  if (error) {
    // showErrorAlert(errorMsg.toString(), props);
  } else {
    console.log('Email: ' + email + '\n' + 'Password: ' + password);
    navigate();    
  }
}

const validateFields = (email: string, password: string) => {
  if (email === '' || password === '') {
    return [true, 'Errors.Please fill all the fields!'];
  }
  return [false, ''];
}