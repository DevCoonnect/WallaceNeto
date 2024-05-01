export const validateFields = (name: string, email: string, password: string, confirmPassword: string) => {
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