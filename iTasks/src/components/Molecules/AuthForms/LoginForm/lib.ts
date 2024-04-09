import React from "react";

type LoginProps = {
  email: string;
  password: string;

  setErrorMsg: React.Dispatch<React.SetStateAction<string>>;
  setAlertVisibility: React.Dispatch<React.SetStateAction<boolean>>;
}

const onSubmit = (props: LoginProps) => {
  let [error, errorMsg] = validateFields(props.email.trim(), props.password);
  if (error) {
    showErrorAlert(errorMsg.toString(), props);
  } else {
    console.log('Email: ' + props.email + '\n' + 'Password: ' + props.password);
  }
}

const showErrorAlert = (errorMsg: string, {setErrorMsg, setAlertVisibility}: LoginProps) => {
  setErrorMsg(errorMsg);
  setAlertVisibility(true);

  setTimeout(() => {
    setAlertVisibility(false);
    setErrorMsg("");
  }, 2000);
} 

const validateFields = (email: string, password: string) => {
  if (email === '' || password === '') {
    return [true, 'Errors.Please fill all the fields!'];
  }
  return [false, ''];
}

export {onSubmit}