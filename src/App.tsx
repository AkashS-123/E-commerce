import { Routes, Route, Navigate } from "react-router-dom";
import { CartProvider } from "./context/CartContext"; // <-- Add this

import Layout from "./components/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import ForgotPassword from "./pages/ForgotPassword";
import NotFound from "./pages/NotFound";
import ProfileLayout from "./pages/profile/ProfileLayout";
import AccountInfo from "./pages/profile/AccountInfo";
import MyOrders from "./pages/profile/MyOrders";
import MyAddress from "./pages/profile/MyAddress";
import ChangePassword from "./pages/profile/ChangePassword";
import Contact from "./pages/Contact";
import Checkout from "./pages/Checkout";
import About from "./pages/About";
import Product from "./pages/Product";
import Shop from "./pages/Shop";
import ProductQuickBuy from "./pages/profile/ProductQuickBuy";

export default function App() {
  return (
    <CartProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product/:slug" element={<Product />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product-checkout" element={<ProductQuickBuy />} />

          <Route path="/profile" element={<ProfileLayout />}>
            <Route index element={<Navigate to="account-info" replace />} />
            <Route path="account-info" element={<AccountInfo />} />
            <Route path="orders" element={<MyOrders />} />
            <Route path="address" element={<MyAddress />} />
            <Route path="password" element={<ChangePassword />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </CartProvider>
  );
}