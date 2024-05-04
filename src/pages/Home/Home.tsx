import { useEffect, useState } from "react";
import CategoryLabel from "../../components/CategoryLabel/CategoryLabel";
import { TProductResponse } from "../../types/Product.types";
import ProductCard from "../../components/ProductCard/ProductCard";
import CategoriesServices from "../../services/CategoriesServices";
import LoaderSpinner from "../../components/LoaderSpinner/LoaderSpinner";
import ProductsServices from "../../services/ProductsServices";
import "./Home.css";
import { useNavigate, useParams } from "react-router-dom";

export default function Home() {
  const { categoryName } = useParams<{ categoryName: string }>();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [categoriesList, setCategoriesList] = useState<string[]>([]);
  const [productsList, setProductsList] = useState<TProductResponse[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>(
    categoryName ?? ""
  );
  async function getAllCategoriesHandler() {
    setIsLoading(true);
    try {
      const { data } = await CategoriesServices.getAllCategories();
      setCategoriesList(data);
      if (data?.length > 0 && categoryName === "category") {
        setActiveCategory(data[0]);
      }
    } catch (err) {
      console.log("error while fetching categories", err);
    } finally {
      setIsLoading(false);
    }
  }
  async function getProductsFilteredByCategoryHandler() {
    setIsLoading(true);
    try {
      const { data } = await ProductsServices.getFilteredProducts(
        activeCategory
      );
      setProductsList(data);
    } catch (err) {
      console.log("error while fetching products", err);
    } finally {
      setIsLoading(false);
    }
  }
  useEffect(() => {
    getAllCategoriesHandler();
  }, []);

  useEffect(() => {
    activeCategory && getProductsFilteredByCategoryHandler();
  }, [activeCategory]);

  useEffect(() => {
    const constructUrl = () => {
      const urlParams = [activeCategory].join("/");
      navigate(`/products/${urlParams}`);
    };

    constructUrl();
  }, [activeCategory]);

  return (
    <>
      {isLoading && <LoaderSpinner />}
      <div className="container mx-auto py-11 px-5">
        <div className="grid md:grid-cols-3 grid-cols-1">
          <div className="col-span-1 md:text-start sm:text-center">
            <p className="font-bold text-2xl mb-1">Shop by Category</p>
            <p className="text-sm text-gray-500 font-medium">
              Discover the perfect products for your needs.
            </p>
          </div>
          <div className="md:col-span-2 col-span-1 flex flex-wrap items-center gap-3 md:mt-0 md:justify-end sm:justify-center sm:mt-4">
            {categoriesList?.map((category) => (
              <CategoryLabel
                key={category}
                name={category}
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
              />
            ))}
          </div>
        </div>
        <div className="products-section overflow-auto max-h-[80vh] grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mt-10">
          {productsList?.map((product, index) => (
            <div
              className="col-span-1 fade-up-animation"
              key={product?.title}
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <ProductCard
                name={product?.title}
                description={product?.description}
                image={product?.image}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
