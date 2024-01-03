import React from "react";
import "./beauty.css";
const Beauty = (props) => {
  const { id, image } = props.data;
  return (
    <>
      <div className="beauty-card">
        <div className="beauty-card-content" key={id}>
          <img src={image} alt="...." className="beauty-img" />
        </div>
      </div>
    </>
  );
};

export default Beauty;
