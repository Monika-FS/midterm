import React from "react";
import { useSelector } from "react-redux";
import "../checkout/checkout.css";
import { Link } from "react-router-dom";
const Checkout = () => {
  const cartproducts = useSelector((state) => state.cart.value);

  const subtotal = cartproducts.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
  return (
    <div className="container">
      <div className="checkout-page">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh8eg7AoZ_hJw-TkhCQRImr6EaH9bzJ0p7hHF8Wpx-2iaz-tgd7gatzF16-0mkgGQkRyA&usqp=CAU"
          alt="..."
          className="checkout-logo"
        />
        <h3>Your order for is placed worth Rs {subtotal}</h3>
        <p>Parcel will deliver to you in 2-3 working days</p>
        <h3>ThankYou</h3>
        <Link to="/products" className="link btn btn-primary continue-btn">
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default Checkout;
