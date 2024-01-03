import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Cart from "../../components/cart/Cart";
import { Link, useNavigate } from "react-router-dom";
import "./cartpage.css";
import { clearCart } from "../../redux/CartSlice";

const Cartpage = () => {
  const cartproducts = useSelector((state) => state.cart.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const subtotal = cartproducts.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  const handleCheckout = () => {
    navigate("/checkout", true);
    setTimeout(() => {
      dispatch(clearCart());
    }, 2000);
  };
  return (
    <>
      <div className="container">
        {cartproducts.length > 0 ? (
          <div className="row">
            {cartproducts.map((item) => (
              <Cart data={item} key={item.id} />
            ))}
          </div>
        ) : (
          <div className="cart-logo text-center">
            <img
              src="https://files.myglamm.com/site-images/original/empty-bag.jpg"
              alt="..."
              width={300}
            />
            <div>
              <h3>Your Cart is empty</h3>
              <p>
                Looks like you have nothing to add in this Cart.<br></br>Go and
                explore top Categories 🛍️
              </p>
              <h4 className="text-center">
                <Link to="/products" className="link1 explore-btn btn">
                  Explore
                </Link>
              </h4>
            </div>
          </div>
        )}

        {cartproducts.length > 0 ? (
          <div className="subtotal">
            <Link to="/products" className="link1 btn btn-primary continue-btn">
              continue shopping
            </Link>
            <div className="right-subtotal">
              <span className="subtotal-text">
                Subtotal : &#8377;{subtotal}
              </span>
              <button className="checkout-btn" onClick={handleCheckout}>
                Checkout
              </button>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Cartpage;
