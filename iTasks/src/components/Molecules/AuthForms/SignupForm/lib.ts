interface SignupProps {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const onSubmit = (props: SignupProps) => {
  const nameFix = props.name.trim();
  const emailFix = props.email.trim().toLowerCase();
  let [error, errorMsg] = validateFields(nameFix, emailFix, props.password, props.confirmPassword);

  if (error) {
    console.warn(errorMsg);
  } else {
    console.log('Name: ' + nameFix + '\n' + 'Email: ' + emailFix + '\n' + 'Password: ' + props.password);
  }
}

const validateFields = (name: string, email: string, password: string, confirmPassword: string) => {
  if (name === '' || email === '' || password === '') {
    return [true, 'Please fill all the fields!'];
  }
  if (name.length < 4) {
    return [true, 'Name must have at least 4 characters'];
  }
  const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (!email.match(re)) {
    return [true, 'Invalid email'];
  }
  if (password.length < 6) {
    return [true, 'Password must have at least 6 characters'];
  }
  if (password !== confirmPassword) {
    return [true, 'Passwords must match'];
  }

  return [false, ''];
}

export {onSubmit}