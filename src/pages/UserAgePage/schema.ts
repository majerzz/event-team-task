import * as yup from 'yup';

export const schema = yup.object().shape({
  name: yup
    .string()
    .required("Поле не должно быть пустым.")
    .matches(/^[a-zA-Z]+$/, 'Поле должно содержать только латинские буквы.')
});