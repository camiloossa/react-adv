import { ShoppingPage } from '../02-component-patterns/pages/ShoppingPage';
import { About, Users } from '../main-component';


export interface Route {
  to: string;
  path: string;
  Component:  () => JSX.Element;
  name: string;
}


export const routes: Route[] = [
  {
    to: '/',
    path: '/',
    name: 'Shopping',
    Component: ShoppingPage,
  },
  {
    to: '/about',
    path: 'about',
    Component: About,
    name: 'About us'
  },
  {
    to: '/users',
    path: 'users',
    Component: Users,
    name: 'Users'
  }
]
