import React from "react";
import Discount from "./Discount";
import { Fashionapi } from "../../api/Fashionapi";

const DiscountList = () => {
  return (
    <>
      <h4 className="fashion-heading text-center">Fashion</h4>
      <div className="container discount-flex">
        {Fashionapi.map((item) => (
          <div className="row">
            <Discount data={item} key={item.id} />
          </div>
        ))}
      </div>
    </>
  );
};

export default DiscountList;
