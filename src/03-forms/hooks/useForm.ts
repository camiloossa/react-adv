import { useState, ChangeEvent } from 'react';


export const useForm = <T>( initialData: T ) => {

  const [ formData, setFormData ] = useState( initialData );

  const onChange = ( { target }: ChangeEvent<HTMLInputElement> ) => {
    setFormData( {
      ...formData,
      [ target.name ]: target.value,
    } );
  };

  const resetForm = () => {
    setFormData( initialData );
  };

  const isValidEmail = ( email: string ) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test( email );
  };

  return {
    // Propierties
    ...formData,
    formData,

    // Methods
    onChange,
    isValidEmail,
    resetForm,
  };
};