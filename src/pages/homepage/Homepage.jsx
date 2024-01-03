import React from "react";
import { Carousel } from "react-responsive-carousel";
import { Context } from "../../api/context";
import Caraousal from "../../components/carousal/Caraousal";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import DiscountList from "../../components/discount/DiscountList";
import Beautylist from "../../components/beauty/Beautylist";
import { Link } from "react-router-dom";
import "./homepage.css";

const Homepage = () => {
  return (
    <>
      <div className="category-carousal">
        <Carousel
          showThumbs={false}
          showStatus={false}
          autoPlay={true}
          infiniteLoop={true}
          transitionTime={2000}
        >
          {Context.map((item) => (
            <Caraousal data={item} />
          ))}
        </Carousel>
        <DiscountList />
        <Beautylist />
      </div>
      <div className="security-container">
        <p className="security-container-items">
          Shoplane will never contact their customerz for cash priZes or request
          passwords/pins/CVV.Please refrain from sharing such confedential
          information with anyone,as this can result in fraudulent transactions
        </p>
        <Link
          className="link1 click-btn"
          to="https://www.myntra.com/privacypolicy"
        >
          Check our privacy Policies here....
        </Link>
      </div>
      <div className="save-earth-container">
        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/0/00/Save_Earth_Series_Logo.png/220px-Save_Earth_Series_Logo.png" />
        <p>Save Earth🌈</p>
      </div>
    </>
  );
};

export default Homepage;
