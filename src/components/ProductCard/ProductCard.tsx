import { useNavigate } from "react-router-dom";
import { TProductProps } from "../../types/Product.types";
import notFoundImg from "../../assets/not-found-img.jpg";
import showIcon from "../../assets/show-icon.svg";

export default function ProductCard({
  product,
  index,
  openModal,
}: TProductProps) {
  const navigate = useNavigate();
  return (
    <div
      className="col-span-1 fade-up-animation shadow-lg rounded-lg overflow-hidden p-4 relative"
      key={product?.title}
      style={{ animationDelay: `${index * 0.3}s` }}
      onClick={() => {
        navigate(`/products/details/${product.id}`);
      }}
    >
      <img
        src={showIcon}
        alt="show-icon"
        className="absolute top-4 end-4 cursor-pointer w-[30px] z-40"
        onClick={(e) => {
          e.stopPropagation();
          openModal(product);
        }}
      />
      <div className="w-full">
        <div className="w-full h-64 overflow-hidden">
          <img
            className="w-full h-full object-contain"
            src={product?.image || notFoundImg}
            alt={"product-img"}
          />
        </div>

        <div className="py-4">
          <div className="font-bold text-lg">
            {product?.title
              ? product?.title?.split(" ")?.length > 8
                ? product?.title?.split(" ")?.slice(0, 8)?.join(" ") + " ..."
                : product?.title
              : "Product Name"}
          </div>
          <p className="text-gray-700 text-base product-description">
            {product?.description
              ? product?.description?.split(" ")?.length > 15
                ? product?.description?.split(" ")?.slice(0, 15)?.join(" ") +
                  " ..."
                : product?.description
              : "Product subtitle"}
          </p>
        </div>
      </div>
    </div>
  );
}
