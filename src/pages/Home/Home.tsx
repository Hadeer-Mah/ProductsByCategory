import { useEffect, useState } from "react";
import CategoryLabel from "../../components/CategoryLabel/CategoryLabel";
import { TProduct } from "../../types/Product.types";
import ProductCard from "../../components/ProductCard/ProductCard";
import CategoriesServices from "../../services/CategoriesServices";
import LoaderSpinner from "../../components/LoaderSpinner/LoaderSpinner";

export default function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [categoriesList, setCategoriesList] = useState<string[] | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("");
  const products: TProduct[] = [
    {
      name: "Product1",
      subtitle: "product description",
    },
    {
      name: "Product2",
      subtitle: "product description",
    },
    {
      name: "Product3",
      subtitle: "product description",
    },
    {
      name: "Product4",
      subtitle: "product description",
    },
    {
      name: "Product5",
      subtitle: "product description",
    },
  ];
  async function getAllCategoriesHandler() {
    setIsLoading(true);
    try {
      const { data } = await CategoriesServices.getAllCategories();
      setCategoriesList(data);
      if (data?.length > 0) {
        setActiveCategory(data[0]);
      }
    } catch (err) {
      console.log("error while fetching categories", err);
    } finally {
      setIsLoading(false);
    }
  }
  useEffect(() => {
    getAllCategoriesHandler();
  }, []);

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
          {products?.map((product) => (
            <div className="col-span-1" key={product.name}>
              <ProductCard name={product?.name} subtitle={product?.subtitle} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
