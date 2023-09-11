import * as Yup from 'yup';

const validationYup = Yup.object().shape({
  firstName: Yup.string().min(1).max(100).required(),
  lastName: Yup.string().min(1).max(100).required(),
  email: Yup.string().email().required(),
  subject: Yup.string().max(500),
  message: Yup.string().max(20000).min(1).required(),
});

export default validationYup;
