import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./detailpage.css";

const ProductDetailpage = () => {
  let { id } = useParams();
  const [products, setproducts] = useState([]);
  const fetchProducts = () => {
    axios
      .get("https://fakestoreapi.com/products/" + id)
      .then((response) => setproducts(response.data))
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    fetchProducts();
  }, [id]);
  return (
    <div className="detailpage">
      <img src={products.image} style={{ width: "350px" }} />
      <div>
        <h5 className="detail-title">{products.title}</h5>
        <p className="detail-description">{products.description}</p>
        <h2 className="detail-price">
          <span>&#8377;</span>
          {products.price}
        </h2>
        <button className="btn btn-primary">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetailpage;
