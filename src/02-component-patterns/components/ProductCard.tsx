import { createContext } from 'react';
import { useProduct } from '../hooks/useProduct';
import { ProductContextoProps, ProductCardProps } from '../interfaces';

import styles from '../styles/styles.module.css';


export const ProductContext = createContext( {} as ProductContextoProps );
const { Provider } = ProductContext;

export const ProductCard = ( { children, product }: ProductCardProps ) => {

  const { counter, increaseBy } = useProduct();

  return (
    <Provider value={ {
      counter,
      increaseBy,
      product
    } }>
      <div className={ styles.productCard }>
        { children }
      </div>
    </Provider>
  );
};

