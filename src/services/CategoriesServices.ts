import Axios from "./axios-global";

const CategoriesServices = {
  getAllCategories: async function () {
    const response = await Axios.get<string[]>(`products/categories`);
    return response;
  },
}

export default CategoriesServices;