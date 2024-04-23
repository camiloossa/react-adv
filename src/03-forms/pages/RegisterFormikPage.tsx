import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { MyTextInput } from '../components';
import '../styles/styles.css';

const initialData = {
  name: '',
  email: '',
  password: '',
  password2: '',
};

export const RegisterFormikPage = () => {

  return (
    <div>
      <h1>Register Formik Page</h1>

      <Formik
        initialValues={ initialData }
        onSubmit={ ( values ) => {
          console.log( values );
        } }
        validationSchema={ Yup.object( {
          name: Yup.string().min( 2, 'El nombre de contener minimo 2 caracteres' ).max( 15, 'El nombre de no puede contener mas de 15 caracteres' ).required( 'Nombre obligatorio' ),
          email: Yup.string().email( 'Email incorrecto' ).required( 'Email es obligatorio' ),
          password: Yup.string().min( 6, 'El password debe contener mas de 6 caracteres' ).required( 'Password obligatorio' ),
          password2: Yup.string().min(6, 'El password debe contener mas de 6 caracteres').required( 'Password obligatorio' ).oneOf([Yup.ref('password')], 'Las contraseñas no Coinciden')
        } ) }
      >
        {
          ({handleReset}) => (
            <Form>
              <MyTextInput label={ 'Name' } name={ 'name' } placeholder='Nombre completo' />
              <MyTextInput label={ 'Email' } name={ 'email' } type='email' placeholder='Correo electronico' />
              <MyTextInput label={ 'Password' } name={ 'password' } type='password' placeholder='Password' />
              <MyTextInput label={ 'Password' } name={ 'password2' } type='password' placeholder='Repeat Password' />

              <button type="submit" >Enviar</button>
              <button type="button" onClick={ handleReset }>Limpiar</button>
            </Form>
          )

        }

      </Formik>
    </div>
  );
};