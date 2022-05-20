import { Route, Routes } from "react-router-dom";
import { Shop } from "../pages/shop";

export const routes = (
  <Routes>
    <Route path="/" element={<Shop />} />
    <Route path="/shop" element={<Shop />} />
  </Routes>
);
