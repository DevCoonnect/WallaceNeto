import {UserAuth} from '../../global/types';

const validateFormField = (fields: UserAuth) => {
  const validations = [];

  validations.push(fields.email && fields.email.includes('@'));
  validations.push(fields.password && fields.password.length >= 6);

  if (fields.stageNew) {
    validations.push(fields.name && fields.name.trim().length >= 3);
    validations.push(fields.confirmPassword === fields.password);
  }

  return validations.reduce((t, a) => t && a);
};

export default validateFormField;
