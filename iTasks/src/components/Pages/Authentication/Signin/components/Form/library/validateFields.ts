type IValidateFieldsProps = {
  email: string;
  password: string;
}

export const validateFields = (props: IValidateFieldsProps) => {
  const {email, password} = {...props};

  return email == "" || password == "";
}