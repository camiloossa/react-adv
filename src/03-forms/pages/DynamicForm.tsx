
import { Form, Formik } from 'formik';
import formJson from '../data/custom-form.json';
import { MySelect, MyTextInput } from '../components';
import * as Yup from 'yup';

const initialValues: { [ x: string ]: any } = {};
const requiredFields: { [ x: string ]: any } = {};

for( const input of formJson ){
  initialValues[input.name] = input.value;

  if( !input.validations ) continue;

  let schema = Yup.string();

  for (const rule of input.validations ) {
    if(rule.type === 'required') {
      schema = schema.required('Este campo es requerido')
    }

    if( rule.type === 'min') {
      schema = schema.min( rule.value || 2, `Debe contener mas de ${rule.value || 2 }  caracteres`);
    }

    if( rule.type === 'max') {
      schema = schema.max(rule.value || 2, `No puede contener mas de ${ rule.value || 15 } caracteres`);
    }

    if( rule.type === 'email') {
      schema = schema.email('No es un correo electronico valido');
    }

    // Otras reglas de validación
  }

  requiredFields[input.name] = schema;
}

export const DynamicForm = () => {
  return (
    <div>
      <h1>Dynamic Form</h1>

      <Formik
        initialValues={ initialValues }
        onSubmit={ ( values ) => {
          console.log( values );
        } }
        validationSchema={ Yup.object({...requiredFields}) }

      > 
        {
          ( ) => (
            <Form noValidate>
              {
                formJson.map( ( { type, name, placeholder, label, options } ) => {

                  if( type === 'text' || type === 'password' || type === 'email' ) {
                    return <MyTextInput key={ name } label={ label } name={ name } type={ type as any } placeholder={ placeholder } />;
                  } else if( type === 'select') {
                    return (
                      <MySelect key = { name } label = { label } name = { name }>
                        <option value="">---</option>
                        {
                          options?.map( ({ id, label }) => (
                            <option key = { id } value={ id }>{ label }</option>
                          ))
                        }
                      </MySelect>
                    )
                  }

                } )
              }

              <button type="submit" >Submit</button>
            </Form>
          )
        }

      </Formik>
    </div>
  );
};