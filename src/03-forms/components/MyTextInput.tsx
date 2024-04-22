import { ErrorMessage, useField } from 'formik';

interface Props {
  label: string;
  name: string;
  type?: 'text' | 'email' | 'password';
  placeholder?: string;
  [x: string]: any; // Recibir cualquier cantidad de parametros adicionales
}

export const MyTextInput = ( { label, ...props }: Props ) => {

  const [ field ] = useField(props);

  return (
    <>
      <label htmlFor={ props.id || props.name }>{ label }</label>
      <input type="text" { ...field } { ...props } />
      <ErrorMessage name={ props.name } component="span" /* tambien se puede poner el -> className="clases-personalizadas"*/ />
      {/* {
        meta.touched && meta.error && ( <span>{ meta.error } </span>)
      } */}
    </>
  )
}