import { ErrorMessage, useField } from 'formik';

interface Props {
  label: string;
  name: string;
  [ x: string ]: any; // Recibir cualquier cantidad de parametros adicionales
}

export const MyCheckbox = ( { label, ...props }: Props ) => {

  const [ field, meta ] = useField( props );

  return (
    <>
      <div className='campo' style={ { display: 'flex', flexDirection: 'column' } }>
        <div className="fila">
          <input id={ props.name } type="checkbox" { ...field } { ...props } />
          <label htmlFor={ props.id || props.name }>{ label }</label>
        </div>
      </div>
      <ErrorMessage name={ props.name } component="span" /* tambien se puede poner el -> className="clases-personalizadas"*/ />
    </>
  );
};