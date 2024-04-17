import { Props as ProdictTitleProps } from '../components/ProductTitle';
import { Props as ProductButtonsProps } from '../components/ProductButtons';
import { Props as ProductCardProps } from '../components/ProductCard';
import { Props as ProductImgProps } from '../components/ProductImage';


export interface Product {
  id: string;
  title: string;
  image?: string;
}

export interface ProductContextoProps {
  counter: number;
  product: Product;
  increaseBy: ( value: number ) => void;
}

export interface ProductCardHOCProps {
  ( { children, product }: ProductCardProps ): JSX.Element,
  Buttons: ( Props: ProductButtonsProps ) => JSX.Element;
  Image: ( Props: ProductImgProps ) => JSX.Element;
  Title: ( Props: ProdictTitleProps ) => JSX.Element;
}