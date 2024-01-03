import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "./cart.css";
import {
  RemoveFromCart,
  decreaseQuantity,
  increaseQuantity,
} from "../../redux/CartSlice";

const Cart = (props) => {
  const dispatch = useDispatch();

  const { id, image, title, price, quantity } = props.data;

  const handleRemove = () => {
    dispatch(RemoveFromCart(id));
  };

  const handleDecrease = () => {
    dispatch(decreaseQuantity(props.data.id));
  };

  const handleIncrease = () => {
    dispatch(increaseQuantity(props.data.id));
  };
  return (
    <>
      <div className="cart-container">
        <div className="Cart">
          <div className="product-cart">
            <div className="left-cart">
              <Link to={"/product/details/" + id}>
                <img
                  src={image}
                  className="cart-img"
                  alt="...."
                  style={{ height: "100px" }}
                />
              </Link>
              <h5 className="cart-title">{title.slice(0, 10)}</h5>
            </div>
            <div className="right-cart">
              <button className="quantity">
                <span onClick={handleDecrease}>-</span>
                <span>Quantity:{quantity}</span>
                <span onClick={handleIncrease}>+</span>
              </button>
              <span className="cart-price">&#8377; {price * quantity}</span>
              <button
                className="btn btn-primary remove-btn"
                onClick={() => {
                  handleRemove(props.data.id);
                }}
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
