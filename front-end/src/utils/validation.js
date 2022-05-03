export const loginValidate = (email, password) => {
  const LENGTH_MIN_PASS = 6;
  const regexEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]/i;
  if (regexEmail.test(email) && password.length >= LENGTH_MIN_PASS) return false;
  return true;
};

export const registerValidate = (name, email, password) => {
  const LENGTH_MIN_NAME = 12;
  const LENGTH_MIN_PASS = 6;
  const regexEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]/i;
  if (regexEmail.test(email)
    && password.length >= LENGTH_MIN_PASS
    && name.length >= LENGTH_MIN_NAME) return false;
  return true;
};
