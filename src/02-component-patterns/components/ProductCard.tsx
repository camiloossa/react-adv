import { CSSProperties, ReactElement, createContext } from 'react';
import { useProduct } from '../hooks/useProduct';
import { Product, ProductContextoProps } from '../interfaces';

import styles from '../styles/styles.module.css';

export const ProductContext = createContext( {} as ProductContextoProps );
const { Provider } = ProductContext;

export interface Props {
  product: Product;
  children?: ReactElement | ReactElement[];
  className?: string;
  style?: CSSProperties
}

export const ProductCard = ( { children, product, className, style }: Props ) => {

  const { counter, increaseBy } = useProduct();

  return (
    <Provider value={ {
      counter,
      increaseBy,
      product
    } }>
      <div className={ `${ styles.productCard } ${ className } ` } style={ style }>
        { children }
      </div>
    </Provider>
  );
};

