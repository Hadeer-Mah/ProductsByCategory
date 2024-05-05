export type TProductResponse = {
  id: number,
  title: string,
  price: string,
  category: string,
  description: string,
  image: string,
};

export type TProductProps = {
  product: TProductResponse,
  index: number,
  openModal: (product: TProductResponse) => void
};

export type TProductDetailsProps = {
  product: TProductResponse,
  onClose: () => void;
}