import { Suspense } from 'react';
import { BrowserRouter, NavLink, Navigate, Route, Routes } from 'react-router-dom';
import { routes } from './routes';



import logo from '../assets/react.svg';

export const Navigation = () => {
  return (
    <Suspense>
      <BrowserRouter>
        <div className="main-layout">
          <nav className='nav-main'>
            <img src={ logo } alt="Logo de react" />
            <ul>
              {
                routes.map( route => (
                  <li key={ route.path }>
                    <NavLink to={ route.to } className={ ( { isActive } ) => ( isActive ) ? 'nav-active' : '' } >{ route.name }</NavLink>
                  </li>
                ) )
              }
            </ul>
          </nav>

          <Routes>
          {
            routes.map( route => (
              <Route key={ route.path } path={ route.path } element={ <route.Component /> } />
            ))
          }
            <Route path='/*' element={ <Navigate to={ routes[0].to } replace /> } />
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>

  );
};