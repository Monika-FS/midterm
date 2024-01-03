import React, { useEffect, useState } from "react";
import axios from "axios";
import "./category.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import CategoryList from "./CategoryList";
import { useDispatch, useSelector } from "react-redux";
import { AddtoCart, RemoveFromCart } from "../../redux/CartSlice";
import { toogleLike } from "../../redux/toogleSlice";

const Category = () => {
  const [catproducts, setCatProducts] = useState([]);
  let { category } = useParams();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.value);
  const likedProducts = useSelector((state) => state.toogle.likedProducts);

  //.................. Fetch category api..............................//
  const fetchProductsByCategory = async () => {
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products/category/${category}`
      );
      setCatProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  useEffect(() => {
    fetchProductsByCategory();
  }, [category]);

  //.......................HandleClick...........................//
  const handleClick = (product) => {
    const isProductInCart = cartItems.find((item) => item.id === product.id);
    if (isProductInCart) {
      dispatch(RemoveFromCart(product.id));
    } else {
      dispatch(AddtoCart({ ...product, quantity: 1 }));
    }
  };
  //....................handleLike..............................//
  const handleLike = (item) => {
    dispatch(toogleLike(item));
  };

  return (
    <div className="container ">
      <CategoryList />
      <h2 className="category-heading text-center">{category.toUpperCase()}</h2>
      <div className="category-flex">
        {catproducts.map((product) => {
          const isLike = likedProducts.includes(product);
          return (
            <div key={product.id} className="category-item">
              <i
                className={`fa-sharp fa-solid fa-heart like-icon ${
                  isLike ? "click-like-icon" : ""
                }`}
                onClick={() => handleLike(product)}
              ></i>

              <Link to={`/product/details/${product.id}`}>
                <img
                  src={product.image}
                  className="category-img"
                  alt="...."
                  style={{ height: "200px" }}
                />
              </Link>
              <div className="category-items">
                <h3 className="category-title">{product.title.slice(0, 10)}</h3>
                <p className="category-description">
                  {product.description.slice(0, 15)}
                </p>
                <p className="category-price">${product.price}</p>
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    handleClick(product);
                  }}
                >
                  {cartItems.find((item) => item.id === product.id)
                    ? "Remove from Cart"
                    : "Add to Cart"}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Category;
