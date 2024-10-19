import { Alert } from 'react-native';

import { emailValid } from './emailValid';
import { nameValid } from './nameValid';
import { passwordConfirmValid, passwordValid } from './passwordValid';
import { phoneValid } from './phoneValid';

export const allValid = (name: string, email: string, password: string, passwordConfirm: string, phone: string) => {
  if (!nameValid(name)) {
    return false;
  }

  if (!emailValid(email)) {
    return false;
  }

  if (!passwordValid(password)) {
    return false;
  }

  if (!passwordConfirmValid(passwordConfirm, password)) {
    return false;
  }

  if (!phoneValid(phone)) {
    return false;
  }

  return true;
};
