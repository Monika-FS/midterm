import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loginpage from "./pages/login/Loginpage";
import Registerpage from "./pages/register/Registerpage";
import Homepage from "./pages/homepage/Homepage";
import Productpage from "./pages/productpage/ProductList";
import ProductDetailpage from "./pages/productpage/ProductDetailpage";
import Cartpage from "./pages/cartpage/Cartpage";
import About from "./pages/aboutpage/About";
import Checkout from "./pages/checkout/Checkout";
import Category from "./components/category/Category";
import CategoryList from "./components/category/CategoryList";
import Wishlistpage from "./pages/wishlistpage/Wishlistpage";
import Layout from "./pages/Layout";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Registerpage />} />
            <Route path="/login" element={<Loginpage />} />
            <Route path="/home" element={<Homepage />} />
            <Route path="/products" element={<Productpage />} />
            <Route
              path="/product/details/:id"
              element={<ProductDetailpage />}
            />
            <Route path="/categories" element={<CategoryList />} />
            <Route path="/categories/:category" element={<Category />} />
            <Route path="/cart" element={<Cartpage />} />
            <Route path="/about" element={<About />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/wishlist" element={<Wishlistpage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
