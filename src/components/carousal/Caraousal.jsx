import React from "react";
import "./caraousal.css";

function Caraousal(props) {
  const { title, url } = props.data;
  return (
    <>
      <div className="banner">
        <img src={url} alt="..." className="banner-img" />
        <h1 className="title">{title}</h1>
      </div>
    </>
  );
}

export default Caraousal;
