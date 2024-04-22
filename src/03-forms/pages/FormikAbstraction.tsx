import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { MyTextInput, MySelect, MyCheckbox } from '../components';

import '../styles/styles.css';

const initialData = {
  firstName: '',
  lastName: '',
  email: '',
  terms: false,
  jobType: ''
};

export const FormikAbstraction = () => {

   return (
    <div className="bg-red">
      <h1>Formik Abstraction Tutorial</h1>

      <Formik
        initialValues={ initialData }
        onSubmit={ ( values ) => {
          console.log( values );
        } }
        validationSchema={ Yup.object( {
          firstName: Yup.string().max( 15, 'debe tener 15 caracteres o menos' ).required( 'Requerido' ),
          lastName: Yup.string().max( 15, 'debe tener 15 caracteres o menos' ).required( 'Requerido' ),
          email: Yup.string().required( 'Requerido' ).email( 'Debe ser un email valido' ),
          terms: Yup.boolean().oneOf([true], 'Debe aceptar terminos y condiciones'),
          jobType: Yup.string().required('Job Type is required').notOneOf(['it-junior'], 'Esta opción no es permitida')
        })}

      >
        {
          (/*formik*/) => (
            <Form >
              <MyTextInput label="First Name" name="firstName" placeholder='Ingresa tu nombre' />

              <MyTextInput label="Last Name" name="lastName" placeholder='Ingresa tu Apellido' />             
            
              <MyTextInput label="Email" name="email" placeholder='Correo electronico' type="email" />

              <MySelect label="Job Type" name="jobType" >
                <option value="">---</option>
                <option value="developer">Developer</option>
                <option value="designer">Designer</option>
                <option value="it-junior">IT Junior</option>
              </MySelect>      

              <MyCheckbox label="Termns & Conditions" name="terms" />   

              <button type="submit">Send</button>
              
            </Form>
          )
        }
      </Formik>


    </div>
  );
};