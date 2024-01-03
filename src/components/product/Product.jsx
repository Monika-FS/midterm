import React from "react";
import { Link } from "react-router-dom";
import { AddtoCart, RemoveFromCart } from "../../redux/CartSlice";
import { useDispatch, useSelector } from "react-redux";
import "./Product.css";
import { toogleLike } from "../../redux/toogleSlice";

const Product = (props) => {
  const { id, title, image, price, description } = props.data;
  const dispatch = useDispatch();
  const likedProducts = useSelector((state) => state.toogle.likedProducts);
  const cartItems = useSelector((state) =>
    state.cart.value.some((cartItem) => cartItem.id === id)
  );

  const isLike = likedProducts.includes(props.data);

  /*..............................Handle cart button........................*/
  const handleCart = () => {
    const item = { ...props.data, quantity: 1 };

    if (cartItems) {
      dispatch(RemoveFromCart(item.id));
    } else {
      dispatch(AddtoCart(item));
    }
  };

  /* .................................Handlelike button........................................*/
  const handleLike = () => {
    dispatch(toogleLike(props.data));
  };

  return (
    <div className="product">
      <div className="pdoduct-card" key={id}>
        <i
          className={`fa-sharp fa-solid fa-heart like-icon ${
            isLike ? "click-like-icon" : ""
          }`}
          onClick={handleLike}
        ></i>

        <Link to={"/product/details/" + id}>
          <img
            src={image}
            className="product-img"
            alt="...."
            style={{ height: "180px" }}
          />
        </Link>

        <div className="product-body">
          <p className="product-title">{title.slice(0, 10)}</p>
          <p className="product-description">{description.slice(0, 20)}</p>
          <h4 className="product-price">
            <span>&#8377;</span>
            {price}
          </h4>
          <button
            className="btn btn-primary"
            onClick={() => {
              handleCart(props.data);
            }}
          >
            {cartItems ? "Remove From Cart" : " Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
