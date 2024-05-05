import { useState } from "react";
import { TProductDetailsProps } from "../../types/Product.types";
import closeIcon from "../../assets/close-icon.svg";
import "./ProductDetailsModal.css";

function ProductDetailsModal({ product, onClose }: TProductDetailsProps) {
  const [closing, setClosing] = useState<boolean>(false);

  function closingModalHandler() {
    setClosing(true);
    // Wait for the animation to complete before triggering onClose function
    setTimeout(() => {
      onClose();
    }, 200);
  }

  //Close modal when clicking anywhere outside it
  function clickOutsideModalHandler(
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) {
    // Checking if the user has clicked outside the modal not on an element within the modal itself
    if (event.target === event.currentTarget) {
      closingModalHandler();
    }
  }

  return (
    <div
      className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-[100] px-3"
      onClick={clickOutsideModalHandler}
    >
      <div
        className={`bg-white rounded-lg p-5 max-w-md overflow-auto max-h-[80%] product-details-modal custom-scrollbar relative ${
          closing ? "closing" : ""
        }`}
      >
        <div className="absolute top-2 right-2">
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
          className="w-[50%] mx-auto mb-4 max-h-[200px] object-contain mt-8"
        />
        <div className="flex justify-between mt-8 items-center">
          <p className="px-5 py-1 bg-[#ff8500] text-white rounded text-center text-sm">
            {product?.category?.toUpperCase()}
          </p>
          <p className="font-bold text-xl">{`$${product?.price}`}</p>
        </div>
        <div className="font-bold text-base my-2">{product?.title}</div>
        <div className="text-sm">{product?.description}</div>
      </div>
    </div>
  );
}

export default ProductDetailsModal;
