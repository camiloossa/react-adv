import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components';
import '../styles/custom-styles.css';

import { products } from '../data/products';

const product = products[ 0 ];


export const ShoppingPage = () => {

  return (
    <div >
      <h1>ShoppingPage</h1>
      <hr />
      <ProductCard key={ product.id } product={ product }
        initialValues={ {
          count: 4,
          maxCount: 10
        } }
        className={ 'bg-dark text-white' }
      >
        {
          ( { reset, count, isMaxCountReached, increaseBy } ) => (
            <>
              <ProductImage className="custom-image" />
              <ProductTitle />
              <ProductButtons className="custom-button" />

              <button onClick={ reset }>Reset</button>
              <button onClick={ () => increaseBy(-2) } >-2</button>
              <button onClick={ () => increaseBy(+2) } disabled={ isMaxCountReached } >+2</button>
              <span>{ count }</span>
            </>
          )
        }
      </ProductCard>
    </div>
  );
};