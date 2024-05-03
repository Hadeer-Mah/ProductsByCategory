import notFoundImg from "../../assets/not-found-img.jpg";
import { TProduct } from "../../types/Product.types";

export default function ProductCard({name, subtitle, image}: TProduct) {
  return (
    <div className="w-full rounded-lg overflow-hidden">
      <img className="w-full rounded-lg h-64 object-cover" src={image || notFoundImg} alt={"product-img"} />
      <div className="py-4">
        <div className="font-bold text-lg mb-0.5">{name || "Product Name"}</div>
        <p className="text-gray-700 text-base">{subtitle || "Product subtitle"}</p>
      </div>
    </div>
  );
}
