import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components';
import '../styles/custom-styles.css';

const product = {
  id: '1',
  title: 'Coffee Mug - Card',
  image: './coffee-mug.png'
};

export const ShoppingPage = () => {
  return (
    <div >
      <h1>ShoppingPage</h1>
      <hr />

      <div style={ { display: 'flex', flexDirection: 'row', flexWrap: 'wrap' } }>

        <ProductCard product={ product } className={ 'bg-dark text-white' } >
          <ProductCard.Image className="custom-image" />
          <ProductCard.Title />
          <ProductCard.Buttons className="custom-button" />
        </ProductCard>

        <ProductCard product={ product } className={ 'bg-dark text-white' } >
          <ProductImage className="custom-image" />
          <ProductTitle />
          <ProductButtons className="custom-button" />
        </ProductCard>

        <ProductCard product={ product } style={ { backgroundColor: '#70D1F8' } }  >
          <ProductImage style={ {
            borderRadius: 20,
            padding: 10
          } } />
          <ProductTitle style={ {
            fontWeight: 'bold'
          } } />
          <ProductButtons style={ {
            display: 'flex',
            justifyContent: 'flex-end'
          } } />
        </ProductCard>

      </div>
    </div>
  );
};