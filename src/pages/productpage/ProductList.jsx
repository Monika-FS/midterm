import axios from "axios";
import React, { useEffect, useState } from "react";
import Product from "../../components/product/Product";
import Category from "../../components/category/CategoryList";
import { RotatingTriangles } from "react-loader-spinner";

const Productpage = () => {
  const [products, setproducts] = useState([]);
  const [loading, setloading] = useState(true);

  const fetchProducts = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => setproducts(response.data))
      .catch((error) => console.log(error))
      .finally(setloading(false));
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div className="container">
      <Category />
      <p className="heading">Shop all products from here....</p>
      {loading ? (
        <div className="loader-container">
          <RotatingTriangles
            visible={true}
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="rotating-triangles-loading"
            wrapperStyle={{}}
          />
        </div>
      ) : (
        <div className="product-flex">
          {products.map((product) => (
            <Product data={product} key={product.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Productpage;
