import { useState } from 'react';
import { ProductInCart, onChangeArgs } from '../interfaces';


export const useShoppingCart = () => {

  const [ shoppingCart, setShoppingCart ] = useState<{ [ key: string ]: ProductInCart; }>( {} );

  const onProductCountChange = ( { count, product }: onChangeArgs ) => {

    setShoppingCart( prev => {

      const productInCart: ProductInCart = prev[ product.id ] || { ...product, count: 0 };

      if ( Math.max( productInCart.count + count, 0 ) > 0 ) {
        productInCart.count += count;
        return {
          ...prev,
          [ product.id ]: productInCart
        };
      }

      const { [ product.id ]: toDelete, ...rest } = prev;

      return { ...rest };

      // Borrar el producto

      // if( count === 0 ) {
      //   const { [product.id]: toDelete, ...rest  } = prev;

      //   return {...rest}
      // }

      // return {
      //   ...shoppingCart,
      //   [ product.id ]: { ...product, count }
      // }
    } );
  };

  return {
    shoppingCart,
    
    onProductCountChange,
  };
};