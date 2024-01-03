import React from "react";
import { useSelector } from "react-redux";
import Product from "../../components/product/Product";
import "./wishlist.css";

const Wishlistpage = () => {
  const likedProducts = useSelector((state) => state.toogle.likedProducts);

  return (
    <>
      <div className="container wishlist">
        {likedProducts.length > 0 ? (
          <div className="wishlist-flex">
            {likedProducts.map((wishlistitem) => (
              <Product data={wishlistitem} />
            ))}
          </div>
        ) : (
          <div
            style={{ padding: "100px", textAlign: "center", fontSize: "2rem" }}
          >
            Wishlist is empty <i class="fa-regular fa-heart-circle-xmark"></i>
          </div>
        )}
      </div>
    </>
  );
};

export default Wishlistpage;
