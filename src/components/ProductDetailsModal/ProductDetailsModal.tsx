import { useState } from "react";
import { TProductDetailsProps } from "../../types/Product.types";
import closeIcon from "../../assets/close-icon.svg";
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
        className={`bg-white rounded-lg p-5 max-w-md max-h-[80%] overflow-hidden product-details-modal ${
          closing ? "closing" : ""
        }`}
      >
        <div className="w-full flex justify-end mb-4">
          <img
            src={closeIcon}
            alt="close-icon"
            className="max-w-[30px] cursor-pointer"
            onClick={closingModalHandler}
          />
        </div>
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
        <div className="font-bold text-lg my-2">{product?.title}</div>
        <div className="mb-9 custom-scrollbar overflow-auto max-h-[100px] pb-5">
          {product?.description}
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsModal;
