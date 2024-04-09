import React from "react";

type SignupProps = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  
  setErrorMsg: React.Dispatch<React.SetStateAction<string>>;
  setAlertVisibility: React.Dispatch<React.SetStateAction<boolean>>;
}

const onSubmit = (props: SignupProps) => {
  const nameFix = props.name.trim();
  const emailFix = props.email.trim().toLowerCase();
  let [error, errorMsg] = validateFields(nameFix, emailFix, props.password, props.confirmPassword);

  if (error) {
    showErrorAlert(errorMsg.toString(), props);
  } else {
    console.log('Name: ' + nameFix + '\n' + 'Email: ' + emailFix + '\n' + 'Password: ' + props.password);
  }
}

const showErrorAlert = (errorMsg: string, {setErrorMsg, setAlertVisibility}: SignupProps) => {
  setErrorMsg(errorMsg);
  setAlertVisibility(true);

  setTimeout(() => {
    setAlertVisibility(false);
    setErrorMsg("");
  }, 2000);
} 

const validateFields = (name: string, email: string, password: string, confirmPassword: string) => {
  if (name === '' || email === '' || password === '') {
    return [true, 'Errors.Please fill all the fields!'];
  }
  if (name.length < 4) {
    return [true, 'Errors.Name must have at least 4 characters'];
  }
  const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (!email.match(re)) {
    return [true, 'Errors.Invalid email'];
  }
  if (password.length < 6) {
    return [true, 'Errors.Password must have at least 6 characters'];
  }
  if (password !== confirmPassword) {
    return [true, 'Errors.Passwords must match'];
  }

  return [false, ''];
}

export {onSubmit}