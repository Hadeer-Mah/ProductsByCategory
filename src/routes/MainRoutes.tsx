import { Navigate, Route, Routes } from "react-router-dom";
import Products from "../pages/Products/Products";
import ProductDetails from "../pages/ProductDetails/ProductDetails";

export default function MainRoutes() {
  return (
    <Routes>
        <Route path="/*" element={<Navigate to={"/products"} />}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/products/:categoryName" element={<Products/>}/>
        <Route path="/products/details/:id" element={<ProductDetails/>}/>
    </Routes>
  )
}
