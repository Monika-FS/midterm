import React from "react";
import "./discount.css";

const Discount = (props) => {
  const { id, image } = props.data;
  return (
    <>
      <div className="discount-card">
        <div className="discount-card-content" key={id}>
          <img src={image} alt="...." className="discount-img" />
        </div>
      </div>
    </>
  );
};

export default Discount;
