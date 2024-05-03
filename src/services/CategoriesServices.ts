import Axios from "./axios-global";

let CategoriesServices = {
  getAllCategories: async function () {
    const response = await Axios.get<string[]>(`products/categories`);
    return response;
  },
}

export default CategoriesServices;