import React, { useEffect, useState } from "react";
import SingleProduct from "./SingleProduct";
import axios from "axios";
import Styles from "./productsList.module.scss";
import { useSelector } from "react-redux";
import { publicRequest, userRequest } from "../../requestMethod";
import { BigLoader } from "../loader/Loader";

function ProductsList() {
  const { category } = useSelector((state) => state);

  console.log(category, "---------");
  const [products, setProducts] = useState([]);
  const [sort, setSort] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await publicRequest.get("products");
        setProducts(res.data);
      } catch (err) {
        console.log(err, "err");
      }
    };
    getProducts();
  }, []);

  useEffect(() => {
    Object.values(category).includes("All_Products")
      ? setFilteredProducts(products)
      : setFilteredProducts(
          products.filter((item) =>
            Object.entries(category).every(([key, value]) =>
              item[key].includes(value)
            )
          )
        );
  }, [products, category]);

  useEffect(() => {
    switch (sort) {
      case "newest":
        setFilteredProducts((prev) =>
          [...prev].sort((a, b) => a.createdAt - b.createdAt)
        );
        break;
      case "earliest":
        setFilteredProducts((prev) =>
          [...prev].sort((a, b) => b.createdAt - a.createdAt)
        );
        break;
      case "dec price":
        setFilteredProducts((prev) =>
          [...prev].sort((a, b) => b.price - a.price)
        );
        break;
      case "asc price":
        setFilteredProducts((prev) =>
          [...prev].sort((a, b) => a.price - b.price)
        );
        break;
      default:
        setFilteredProducts((prev) =>
          [...prev].sort((a, b) => a.createdAt - b.createdAt)
        );
    }
  }, [sort]);

  // console.log(products, "products");
  return (
    <ul className={Styles.products_container}>
      {filteredProducts.length === 0 ? (
        <BigLoader />
      ) : (
        filteredProducts.map((product) => (
          <li>
            <SingleProduct product={product} key={product._id} />
          </li>
        ))
      )}
    </ul>
  );
}

export default ProductsList;
