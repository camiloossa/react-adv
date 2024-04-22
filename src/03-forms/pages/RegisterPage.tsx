import '../styles/styles.css';
import { useForm } from '../hooks/useForm';
import { FormEvent } from 'react';

const initialData = {
  name: '',
  email: '',
  password: '',
  password2: '',
}

export const RegisterPage = () => {

  const { name, email, password, password2, onChange, resetForm, isValidEmail, formData } = useForm(initialData);
  
  
  const onSubmit = ( e: FormEvent<HTMLFormElement> ) => {
    e.preventDefault();
    console.log( formData );
  };

  return (
    <div>
      <h1>Register Page</h1>

      <form noValidate onSubmit={ onSubmit } >
        <input type="text" placeholder="name" name="name" value={ name } onChange={ onChange } className={`${ name.trim().length <= 0 ? 'has-error' : null }`} />
        { name.trim().length <= 0 && <span>El nombre es obligatorio</span>}

        <input type="email" placeholder="Email" name="email" value={ email } onChange={ onChange } className={`${ !isValidEmail(email) ? 'has-error' : null }`} />
        { !isValidEmail(email) && <span>El email es incorrecto</span> }

        <input type="password" placeholder="Password" name="password" value={ password } onChange={ onChange } />
        { password.trim().length <= 0 && <span>La contraseña es obligatoria</span>}
        { (password.trim().length < 6 && password.trim().length > 0) && <span>La contraseña debe contener mas de 6 caracteres</span>}

        <input type="password" placeholder=" Repeat password" name="password2" value={ password2 } onChange={ onChange } />
        { password2.trim().length <= 0 && <span>La contraseña es obligatoria</span>}
        { (password2.trim().length > 0) && (password !== password2) && <span>Las contraseñas no coinciden</span>}
        <button type="submit"> Create </button>
        <button type="button" onClick={ resetForm }>Reset form</button>
      </form>
    </div>
  );
};