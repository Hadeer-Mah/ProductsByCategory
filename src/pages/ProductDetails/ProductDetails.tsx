import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { TProductResponse } from "../../types/Product.types";
import ProductsServices from "../../services/ProductsServices";
import LoaderSpinner from "../../components/LoaderSpinner/LoaderSpinner";
import back from "../../assets/back.svg";
import i18n from "../../locales/i18n";

export default function ProductDetails() {
  const { id } = useParams();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const lang = i18n.language;
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [productData, setProductData] = useState<TProductResponse>(
    {} as TProductResponse
  );

  // Get Product Data by it's id
  async function getProductDetailsHandler() {
    setIsLoading(true);
    try {
      const { data } = await ProductsServices.getProductDetails(id);
      setProductData(data);
    } catch (err) {
      console.log("error while fetching product Data", err);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getProductDetailsHandler();
  }, []);

  return (
    <>
      {isLoading && <LoaderSpinner />}
      <div className="container mx-auto py-20 px-8">
        <div
          className="flex items-center gap-5 cursor-pointer"
          onClick={() => {
            navigate(-1);
          }}
        >
          <img
            src={back}
            alt="back"
            className={`w-[40px] ${lang === "ar" ? "scale-[-1]" : ""}`}
          />
          <p className="font-semibold text-lg">{t("Back To Previous Page")}</p>
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-8 mt-16">
          <div className="col-span-1">
            <img
              src={productData?.image}
              alt={productData?.title}
              className="w-[80%] mx-auto object-contain"
            />
          </div>
          <div className="md:col-span-2 col-span-1">
            <div className="flex justify-between items-center mb-6">
              <p className="px-5 py-1 bg-[#ff8500] text-white rounded text-center text-sm">
                {t(productData?.category?.toUpperCase() || "")}
              </p>
              <p className="text-2xl font-bold">{`$${
                productData?.price || ""
              }`}</p>
            </div>

            <p className="font-bold text-lg text-black mb-4">
              {productData?.title}
            </p>
            <p className="text-base text-slate-600 mb-10">
              {productData?.description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
