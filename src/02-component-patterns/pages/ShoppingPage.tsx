import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components';
import '../styles/custom-styles.css';
import { useShoppingCart } from '../hooks/useShoppingCart';
import { products } from '../data/products';


export const ShoppingPage = () => {

  const { shoppingCart, onProductCountChange } = useShoppingCart();

  return (
    <div >
      <h1>ShoppingPage</h1>
      <hr />

      <div style={ { display: 'flex', flexDirection: 'row', flexWrap: 'wrap' } }>

        {
          products.map( product => (
            <ProductCard key={ product.id } product={ product } onChange={ onProductCountChange } value={ shoppingCart[ product.id ]?.count || 0 }
              className={ 'bg-dark text-white' } >
              <ProductImage className="custom-image" />
              <ProductTitle />
              <ProductButtons className="custom-button" />
            </ProductCard>
          ) )
        }
      </div>

      <div className="shopping-cart">
        {
          Object.values( shoppingCart ).map( product => (
            <ProductCard key={ product.id } product={ product } value={ product.count } onChange={ onProductCountChange }
              className={ 'bg-dark text-white' } style={ { width: '100px' } } >
              <ProductImage className="custom-image" />
              <ProductButtons className="custom-button" />
            </ProductCard>

          ) )
        }
      </div>

    </div>
  );
};