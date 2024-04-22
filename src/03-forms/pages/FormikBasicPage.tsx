import { FormikErrors, useFormik } from 'formik';
import '../styles/styles.css';

const initialData = {
  firstName: '',
  lastName: '',
  email: '',
}

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
}

export const FormikBasicPage = () => {

  const validate = ( { firstName, lastName, email }: FormValues ) => {
    const errors: FormikErrors<FormValues> = {};

    if( !firstName ) {
      errors.firstName = 'Required';
    } 
    
    if( !lastName ) errors.lastName = 'Required';

    if (!email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      errors.email = 'Invalid email address';
    }

    return errors;
  }

  const { handleChange, values: { firstName, lastName, email }, handleSubmit, errors, touched, handleBlur } = useFormik({
    initialValues: initialData,
    onSubmit: values => {
      console.log(values);
    },
    validate
  });

  return (
    <div className="bg-red">
      <h1>Formik Basic Tutorial</h1>

      <form noValidate onSubmit={ handleSubmit }>
        <label htmlFor="firstName">First Name:</label>
        <input type="text" name="firstName" onChange={ handleChange } value={ firstName } onBlur={ handleBlur } />
        { touched.firstName && errors.firstName && <span>{ errors.firstName }</span>}

        <label htmlFor="lastName">Last Name:</label>
        <input type="text" name="lastName" onChange={ handleChange } value={ lastName } onBlur={ handleBlur } />
        { touched.lastName && errors.lastName && <span>{ errors.lastName }</span>}

        <label htmlFor="email">Email:</label>
        <input type="email" name="email" onChange={ handleChange } value={ email } onBlur={ handleBlur } />
        { touched.email && errors.email && <span>{ errors.email }</span>}

        <button type="submit">Send</button>
      </form>

    </div>
  )
}