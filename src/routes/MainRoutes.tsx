import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";

export default function MainRoutes() {
  return (
    <Routes>
        <Route path="/*" element={<Navigate to={"/products/category"} />}/>
        <Route path="/products/:categoryName" element={<Home/>}/>
    </Routes>
  )
}
