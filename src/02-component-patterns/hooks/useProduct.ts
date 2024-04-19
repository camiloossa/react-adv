import { useEffect,  useRef,  useState } from 'react';
import { Product,InitialValues, onChangeArgs } from '../interfaces';

interface UseProductArgs {
  product: Product;
  onChange?: ( args: onChangeArgs ) => void;
  value?: number;
  initialValues?: InitialValues;
}

export const useProduct = ( { onChange, product, value = 0, initialValues }: UseProductArgs ) => {

  const [ counter, setCounter ] = useState<number>( initialValues?.count || value );
  const isMounted = useRef(false);

  const increaseBy = ( value: number ) => {
    
    const newValue = Math.max( counter + value, 0 );
    setCounter( Math.min( newValue, initialValues?.maxCount || 0 ) );

    onChange && onChange( { count: newValue, product } );
  };

  const reset = () => {
    setCounter( initialValues?.count || value );
  }

  useEffect( () => {

    if( isMounted.current ) {
      isMounted.current = true
      setCounter( value );
    };
  }, [ value ] );

  useEffect(() => {
    
  }, [])
  


  return {
    // Propierties
    counter,
    isMaxCountReached: !!initialValues?.count && initialValues.maxCount === counter,
    maxCount: initialValues?.maxCount,

    // Methods
    increaseBy,
    reset,
  };
};