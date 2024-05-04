import { TProductResponse } from "../types/Product.types";
import Axios from "./axios-global";

const ProductsServices = {
  getFilteredProducts: async function (category: string = "") {
    const response = await Axios.get<TProductResponse[]>(`products/category/${category}`);
    return response;
  },
}

export default ProductsServices;