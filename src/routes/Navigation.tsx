import { BrowserRouter, NavLink, Navigate, Route, Routes } from 'react-router-dom';
import logo from '../assets/react.svg';

export const Navigation = () => {



  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav className='nav-main'>
          <img src={ logo } alt="Logo de react" />
          <ul>
            <li>
              <NavLink to="/" className={ ( { isActive } ) => ( isActive ) ? 'nav-active' : '' } >Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" className={ ( { isActive } ) => ( isActive ) ? 'nav-active' : '' }>About</NavLink>
            </li>
            <li>
              <NavLink to="/users" className={ ( { isActive } ) => ( isActive ) ? 'nav-active' : '' }>Users</NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path='/' element={ <h1>Pagina principal </h1> } />
          <Route path='/about' element={ <h1>About</h1> } />
          <Route path='/users' element={ <h1>User</h1> } />

          <Route path='/*' element={ <Navigate to={ '/' } /> } />
        </Routes>
      </div>
    </BrowserRouter>
  );
};