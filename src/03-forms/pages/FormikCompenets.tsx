import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import '../styles/styles.css';

const initialData = {
  firstName: '',
  lastName: '',
  email: '',
  terms: false,
  jobType: ''
};

export const FormikCompenets = () => {

   return (
    <div className="bg-red">
      <h1>Formik FormikCompenets Tutorial</h1>

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
              <label htmlFor="firstName">First Name:</label>
              <Field name="firstName" type="text" placeholder="First Name" />
              <ErrorMessage name="firstName" component="span" />

              <label htmlFor="lastName">Last Name:</label>
              <Field name="lastName" type="text" />
              <ErrorMessage name="lastName" component="span" />
              
              <label htmlFor="email">Email:</label>
              <Field name="email" type="text" />
              <ErrorMessage name="email" component="span" />

              <label htmlFor="jobType">Job Type</label>
              <Field name="jobType" as="select" >
                <option value="">---</option>
                <option value="developer">Developer</option>
                <option value="designer">Designer</option>
                <option value="it-junior">IT Junior</option>
              </Field>
              <ErrorMessage name="jobType" component="span" />

              <div className="campo">
                <Field name="terms" type="checkbox"  />
                <label htmlFor="terms">Terms and conditions:</label>
                <ErrorMessage name="terms" component="span" />
              </div>

              <button type="submit">Send</button>
              
            </Form>
          )
        }
      </Formik>


    </div>
  );
};