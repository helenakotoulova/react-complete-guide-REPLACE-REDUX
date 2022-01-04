import React, { useContext } from "react";
//import { useSelector } from 'react-redux';

import ProductItem from "../components/Products/ProductItem";
import "./Products.css";
//import { ProductsContext } from "../context/products-context";
import { useStore } from "../hooks-store/store";

const Products = (props) => {
  // pomoci Reduxu: const productList = useSelector(state => state.shop.products);
  /* pomoci Contextu: const productCtx = useContext(ProductsContext);
  const productList = productCtx.products;*/

  const state = useStore()[0]; // 1. polozka co useStore returnuje je state
  const productList=state.products;

  return (
    <ul className="products-list">
      {productList.map((prod) => (
        <ProductItem
          key={prod.id}
          id={prod.id}
          title={prod.title}
          description={prod.description}
          isFav={prod.isFavorite}
        />
      ))}
    </ul>
  );
};

export default Products;
