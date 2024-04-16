import { LazyExoticComponent, lazy } from 'react';
import { NoLazy } from '../01-lazyload/pages';

type JSXComponent = () => JSX.Element;


export interface Route {
  to: string;
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
}

const LazyLayout = lazy( () => import('../01-lazyload/layout/LazyLayout'));


export const routes: Route[] = [
  {
    to: '/lazyload/',
    path: '/lazyload/*',
    name: 'LazyLayout - Dash',
    Component: LazyLayout,
  },
  {
    to: '/no-lazy',
    path: 'no-lazy',
    Component: NoLazy,
    name: 'Lazy 2'
  },
]
