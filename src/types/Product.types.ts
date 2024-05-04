export type TProduct = {
  name?: string;
  description?: string;
  image?: string;
};

export type TProductResponse = {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
};

export type TProductDetailsProps = {
  product: TProductResponse,
  onClose: () => void;
}