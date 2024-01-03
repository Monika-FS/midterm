import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import "./categorylist.css";
import { Link } from "react-router-dom";

function CategoryList() {
  const [categories, setcategory] = useState([]);
  const [loading, setloading] = useState(true);

  const fetchCategory = async () => {
    try {
      const response = await axios.get(
        "https://fakestoreapi.com/products/categories"
      );
      setcategory(response.data);
    } catch (error) {
      console.log("Error", error);
    } finally {
      setloading(false);
    }
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  return (
    <>
      <div className="category-container">
        {loading ? (
          <p style={{ textAlign: "center" }}>Loading categories...</p>
        ) : (
          <div className="category-list">
            <Link className="link1" to="/products">
              <li className="category-items-list">ALL</li>
            </Link>
            {categories.map((category, index) => (
              <Link
                className="link1"
                to={`/categories/${category}`}
                key={index}
              >
                <li className="category-items-list">
                  {category.toUpperCase()}
                </li>
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default CategoryList;
