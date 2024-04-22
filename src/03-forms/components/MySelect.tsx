import { ErrorMessage, useField } from 'formik';

interface Props {
  label: string;
  name: string;
  placeholder?: string;
  [x: string]: any; // Recibir cualquier cantidad de parametros adicionales
}

export const MySelect = ({ label, ...props }: Props) => {

  const [ field, meta ] = useField(props);

  return (
    <>
      <label htmlFor={ props.id || props.name }>{ label }</label>
      <select { ...field } { ...props } />
      <ErrorMessage name={ props.name } component="span" /* tambien se puede poner el -> className="clases-personalizadas"*/ />
    </>
  )
}