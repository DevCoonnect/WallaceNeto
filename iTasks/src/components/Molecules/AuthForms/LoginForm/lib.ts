interface LoginProps {
  email: string;
  password: string;
}

const onSubmit = (props: LoginProps) => {
  let [error, errorMsg] = validateFields(props.email.trim(), props.password);
  if (error) {
    console.warn(errorMsg);
  } else {
    console.log('Email: ' + props.email + '\n' + 'Password: ' + props.password);
  }
}

const validateFields = (email: string, password: string) => {
  if (email === '' || password === '') {
    return [true, 'Please fill all the fields!'];
  }
  return [false, ''];
}

export {onSubmit}