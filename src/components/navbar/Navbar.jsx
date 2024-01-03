import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { toogleMenu } from "../../redux/toogleSlice.js";
import { logout } from "../../redux/LoginSlice.js";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart.value);
  const isOpen = useSelector((state) => state.toogle.IsOpen);
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const likedProducts = useSelector((state) => state.toogle.likedProducts);

  const handleMenu = () => {
    dispatch(toogleMenu());
  };
  const handleClose = () => {
    dispatch(toogleMenu());
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login", true);
  };
  return (
    <>
      <div className="navbar">
        <div className="nav-items">
          <span
            className="material-symbols-outlined menu "
            onClick={handleMenu}
          >
            menu
          </span>
          <span>
            <Link to="/home" className="link" style={{ fontSize: "1.7rem" }}>
              <span style={{ color: " rgb(92, 152, 221)" }}>SHOP</span>
              LANE
            </Link>
          </span>
          <div>
            <Link to="/home" className="link">
              <i class="fa-solid fa-house-user icon"></i>
              Home
            </Link>
            <Link to="/about" className="link">
              <i class="fa-solid fa-circle-exclamation"></i>
              About
            </Link>
            <Link to="/products" className="link">
              <i class="fa-solid fa-store icon"></i>
              Products
            </Link>
          </div>
          <div className="right-header">
            <Link to="/wishlist" className="wishlist-icon">
              {likedProducts.length > 0 ? (
                <i className="fa-regular fa-heart liked"></i>
              ) : (
                <i className="fa-regular fa-heart"></i>
              )}
            </Link>
            <Link to="/cart" className="cart">
              <i class="fa-solid fa-cart-shopping cart-icon"></i>
              <span className="cart-items"> {cart.length}</span>
            </Link>

            <div className="lg-btn-container">
              {isAuthenticated ? (
                <Link to="/login" className="lg-btn" onClick={handleLogout}>
                  <i class="fa-solid fa-right-to-bracket lg-arrow"></i>
                  Logout
                </Link>
              ) : (
                <Link to="/login" className="lg-btn">
                  <i class="fa-solid fa-right-to-bracket lg-arrow"></i>
                  Login
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>

      {/***********************************************sidebar*****************************************/}
      <div>
        <div className={`sidebar ${isOpen ? "show" : ""}`}>
          <div className=" sidebar-items">
            <span class="material-symbols-outlined" onClick={handleClose}>
              close
            </span>

            <Link to="/home" className="link1">
              <i class="fa-solid fa-house-user icon"></i>
              Home
            </Link>
            <Link to="/about" className="link1">
              <i class="fa-solid fa-circle-exclamation"></i>
              About
            </Link>
            <Link to="/products" className="link1">
              <i class="fa-solid fa-store icon"></i>
              Products
            </Link>
            <Link to="/cart" className="link1">
              <i class="fa-solid fa-cart-shopping icon"></i>
              Cart
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
