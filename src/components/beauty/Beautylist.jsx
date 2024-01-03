import React from "react";
import { Beautyapi } from "../../api/Beautyapi";
import Beauty from "./Beauty";

const Beautylist = () => {
  return (
    <>
      <h4 className="beauty-heading text-center">Beauty</h4>
      <div className="container beauty-flex ">
        {Beautyapi.map((item) => (
          <div className="row">
            <Beauty data={item} key={item.id} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Beautylist;
