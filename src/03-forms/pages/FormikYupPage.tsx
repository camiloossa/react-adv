import { useFormik } from 'formik';
import * as Yup from 'yup';
import '../styles/styles.css';

const initialData = {
  firstName: '',
  lastName: '',
  email: '',
}

export const FormikYupPage = () => {

  const { handleSubmit, errors, touched, getFieldProps } = useFormik({
    initialValues: initialData,
    onSubmit: values => {
      console.log(values);
    },
    validationSchema: Yup.object({
      firstName: Yup.string().max(15, 'debe tener 15 caracteres o menos').required('Requerido'),
      lastName: Yup.string().max(15, 'debe tener 15 caracteres o menos').required('Requerido'),
      email: Yup.string().required('Requerido').email('Debe ser un email valido'),
    })
  });

  return (
    <div className="bg-red">
      <h1>Formik Yup Tutorial</h1>

      <form noValidate onSubmit={ handleSubmit }>
        <label htmlFor="firstName">First Name:</label>
        <input type="text" {...getFieldProps('firstName')} />
        { touched.firstName && errors.firstName && <span>{ errors.firstName }</span>}

        <label htmlFor="lastName">Last Name:</label>
        <input type="text" {...getFieldProps('lastName')} />
        { touched.lastName && errors.lastName && <span>{ errors.lastName }</span>}

        <label htmlFor="email">Email:</label>
        <input type="email" {...getFieldProps('email')} />
        { touched.email && errors.email && <span>{ errors.email }</span>}

        <button type="submit">Send</button>
      </form>

    </div>
  )
}