import { Props as ProductCardProps } from "../components/ProductCard";

export interface ProductTitleProps {
  className?: string;
  title?: string;
  style?:React.CSSProperties | undefined
}
export interface ProductButtonsProps {
  className?: string;
  style?:React.CSSProperties | undefined
}

export interface ProductImageProps {
  className?: string;
  img?: string;
  style?:React.CSSProperties | undefined
}

export interface Product {
  id: string;
  img?: string;
  title: string;
}

export interface ProductContextProps {
  counter: number;
  product: Product;
  increaseBy: (value: number) => void;
}

export interface ProductCardHOCProps {
  ({ children, product }: ProductCardProps): JSX.Element;
  Title: (Props: ProductTitleProps) => JSX.Element;
  Image: (Props: { img?: string; className?: string }) => JSX.Element;
  Buttons: (Props: ProductButtonsProps) => JSX.Element;
}


export interface onChangeArgs {
  product: Product;
  count:number;
}


export interface useProductArgs {
  product:Product;
  onChange?:(args:onChangeArgs) => void;
  value?:number;
}

export interface ProductInCart extends Product {
  count: number;
}