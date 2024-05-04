import notFoundImg from "../../assets/not-found-img.jpg";
import { TProduct } from "../../types/Product.types";

export default function ProductCard({ name, description, image }: TProduct) {
  return (
    <div className="w-full">
      <div className="w-full h-64 overflow-hidden">
        <img
          className="w-full h-full object-contain"
          src={image || notFoundImg}
          alt={"product-img"}
        />
      </div>

      <div className="py-4">
        <div className="font-bold text-lg">
          {name
            ? name?.length > 10
              ? name?.split(" ")?.slice(0, 8)?.join(" ") + " ..."
              : name
            : "Product Name"}
        </div>
        <p className="text-gray-700 text-base product-description">
          {description
            ? description?.length > 15
              ? description?.split(" ")?.slice(0, 15)?.join(" ") + " ..."
              : description
            : "Product subtitle"}
        </p>
      </div>
    </div>
  );
}
