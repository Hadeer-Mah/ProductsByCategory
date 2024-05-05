import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { TProductResponse } from "../../types/Product.types";
import showIcon from "../../assets/show-icon.svg";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import ProductsServices from "../../services/ProductsServices";
import ProductCard from "../../components/ProductCard/ProductCard";
import CategoriesServices from "../../services/CategoriesServices";
import LoaderSpinner from "../../components/LoaderSpinner/LoaderSpinner";
import CategoryLabel from "../../components/CategoryLabel/CategoryLabel";
import ProductDetailsModal from "../../components/ProductDetailsModal/ProductDetailsModal";
import "./Products.css";
import { useTranslation } from "react-i18next";

export default function Products() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { categoryName } = useParams<{ categoryName: string }>();
  const [categoriesList, setCategoriesList] = useState<string[]>([]);
  const [productsList, setProductsList] = useState<TProductResponse[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>(
    categoryName ?? ""
  );
  const [selectedProduct, setSelectedProduct] =
    useState<TProductResponse | null>(null);

  // Use custom hook to change document title with the active category
  useDocumentTitle(activeCategory);

  // Handles opening the product details modal by setting the selected product data in the state to be displayed.
  function openingProductModalHandler(product: TProductResponse) {
    setSelectedProduct(product);
  }
  // Handles closing the product modal by resetting the selected product to null.
  function closingProductModalHandler() {
    setSelectedProduct(null);
  }

  // Get categories to filter products by switching between them.
  async function getAllCategoriesHandler() {
    setIsLoading(true);
    try {
      const { data } = await CategoriesServices.getAllCategories();
      setCategoriesList(data);
      // Set the first category item as the current active category when rendering the page if no other filtration is applied yet
      if (data?.length > 0 && !categoryName) {
        setActiveCategory(data[0]);
      }
    } catch (err) {
      console.log("error while fetching categories", err);
    } finally {
      setIsLoading(false);
    }
  }

  // Get products filtered by the selected active category
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

  // Recall get products function every time the active category changes to get the filtered products by this category
  useEffect(() => {
    activeCategory && getProductsFilteredByCategoryHandler();
  }, [activeCategory]);

  /* Reconstruct the url every time active category changes to save category as a url param to preserve last filtered data 
  allowing users to share or bookmark the filtered view and restoring it when the page is reloaded. */
  useEffect(() => {
    const constructUrl = () => {
      navigate(`/products/${activeCategory}`);
    };
    constructUrl();
  }, [activeCategory]);

  return (
    <>
      {isLoading && <LoaderSpinner />}
      {selectedProduct && (
        <ProductDetailsModal
          product={selectedProduct}
          onClose={closingProductModalHandler}
        />
      )}
      <div className="container mx-auto py-11 px-5">
        <div className="grid md:grid-cols-3 grid-cols-1">
          <div className="col-span-1 md:text-start sm:text-center xs:text-center">
            <p className="font-bold text-2xl mb-1">{t("Shop by Category")}</p>
            <p className="text-sm text-gray-500 font-medium">
              {t("Discover the perfect products for your needs")}.
            </p>
          </div>
          <div className="md:col-span-2 col-span-1 flex flex-wrap items-center gap-3 md:mt-0 md:justify-end sm:justify-center sm:mt-4 xs:justify-center xs:mt-4">
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
        <div className="products-section cursor-pointer grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mt-10 p-5">
          {productsList?.map((product, index) => (
            <div
              className="col-span-1 fade-up-animation shadow-lg rounded-lg overflow-hidden p-4 relative"
              key={product?.title}
              style={{ animationDelay: `${index * 0.3}s` }}
              onClick={()=>{navigate(`/products/details/${product.id}`)}}
            >
              <img
                src={showIcon}
                alt="show-icon"
                className="absolute top-4 end-4 cursor-pointer w-[30px] z-40"
                onClick={(e) => {
                  e.stopPropagation();
                  openingProductModalHandler(product);
                }}
              />
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
