import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts, fetchProducts } from "../redux/actions/productActions";
import ProductComponent from "./ProductComponent";
import axios from "axios";

const ProductListing = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();

  // const fetchProducts = async () => {
  //   const response = await axios
  //     .get("https://fakestoreapi.com/products")
  //     .catch((err) => {
  //       console.log('"Err', err);
  //     });
  //   dispatch(setProducts(response.data));
  // };

  useEffect(() => {
    // dispatch(fetchProducts());
    // Action은 항상 plain objects이어야 하는데, 이는 함수이다.
    // 그러니 이 때 미들웨어 사용이 필요하다
    dispatch(fetchProducts());
  }, []);

  console.log("products : ", products);

  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  );
};

export default ProductListing;
