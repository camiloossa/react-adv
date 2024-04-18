import { useState } from 'react';
import { ProductInCart, onChangeArgs } from '../interfaces';


export const useShoppingCart = () => {

  const [ shoppingCart, setShoppingCart ] = useState<{ [ key: string ]: ProductInCart; }>( {} );

  const onProductCountChange = ( { count, product }: onChangeArgs ) => {

    setShoppingCart( prev => {
      if ( count === 0 ) {
        const { [ product.id ]: toDelete, ...rest } = prev;

        return { ...rest };
      }

      return {
        ...shoppingCart,
        [ product.id ]: { ...product, count }
      };
    } );
  };

  return {
    shoppingCart,

    onProductCountChange,
  };
};