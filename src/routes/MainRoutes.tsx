import { Navigate, Route, Routes } from "react-router-dom";
import Products from "../pages/Products/Products";

export default function MainRoutes() {
  return (
    <Routes>
        <Route path="/*" element={<Navigate to={"/products"} />}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/products/:categoryName" element={<Products/>}/>
    </Routes>
  )
}
