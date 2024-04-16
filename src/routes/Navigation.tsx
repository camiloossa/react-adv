import { BrowserRouter, NavLink, Navigate, Route, Routes } from 'react-router-dom';
import logo from '../assets/react.svg';
import { routes } from './routes';

export const Navigation = () => {



  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav className='nav-main'>
          <img src={ logo } alt="Logo de react" />
          <ul>
            {
              routes.map( ({ to, name }) => (
                <li key={ to }>
                  <NavLink to={ to } className={ ( { isActive } ) => ( isActive ) ? 'nav-active' : '' } >{ name }</NavLink>
                </li>
              ))
            }
          </ul>
        </nav>

        <Routes>
          {
            routes.map( ({ path, Component }) => (
              <Route key={ path } path={ path } element={ <Component /> } />
            ))
          }

          <Route path='/*' element={ <Navigate to={ routes[0].to } /> } />
        </Routes>
      </div>
    </BrowserRouter>
  );
};