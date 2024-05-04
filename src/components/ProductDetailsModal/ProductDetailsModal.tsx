import { useState } from "react";
import { TProductDetailsProps } from "../../types/Product.types";
import "./ProductDetailsModal.css";

function ProductDetailsModal({ product, onClose }: TProductDetailsProps) {
  const [closing, setClosing] = useState<boolean>(false);
  function closingModalHandler() {
    setClosing(true);
    setTimeout(() => {
      onClose();
    }, 300);
  }
  function clickOutsideModalHandler(
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) {
    if (event.target === event.currentTarget) {
      closingModalHandler();
    }
  }
  return (
    <div
      className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-[100]"
      onClick={clickOutsideModalHandler}
    >
      <div
        className={`bg-white rounded-lg p-8 max-w-md max-h-[80%] overflow-auto custom-scrollbar product-details-modal ${
          closing ? "closing" : ""
        }`}
      >
        <img
          src={product?.image}
          alt={product?.title}
          className="w-full mb-4 max-h-[200px] object-contain"
        />
        <div className="flex justify-between mt-8 items-center">
          <p className="px-5 py-1 bg-[#ff8500] text-white rounded text-center text-sm">
            {product?.category?.toUpperCase()}
          </p>
          <p className="font-bold text-xl">{`$${product?.price}`}</p>
        </div>
        <p className="my-8">{product?.description}</p>
        <div className="w-fit mx-auto">
          <button
            onClick={closingModalHandler}
            className="bg-black text-white py-2 px-12 rounded border border-transparent hover:bg-white hover:text-black hover:border hover:border-black"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsModal;
