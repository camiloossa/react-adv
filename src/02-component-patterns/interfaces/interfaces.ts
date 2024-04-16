import { ReactElement } from 'react';

export interface ProductCardProps {
  product: Product;
  children?: ReactElement | ReactElement[];
}

export interface Product {
  id: string;
  title: string;
  image?: string;
}

export interface ProductContextoProps {
  counter: number;
  increaseBy: ( value: number ) => void;
  product: Product;
}

export interface ProductCardHOCProsp {
  ({ children, product }: ProductCardProps): JSX.Element,
  Title: ({ title }: { title?: string | undefined }) => JSX.Element;
  Image: ({ img }: { img?: string | undefined }) => JSX.Element;
  Buttons: () => JSX.Element;
}