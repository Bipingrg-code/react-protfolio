import React from "react";
import "./productList.css";
import Product from "../product/Product";
import { products } from "../../data";
const ProductList = () => {
  return (
    <div className="productList">
      <div className="productList-text">
        <h1 className="productList-title">Projects & works. by Me</h1>
        <p className="productList-disc">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis
          iste hic eum quaerat qui dolorem repellendus quibusdam dolor fugiat
          velit! Aperiam ipsa numquam nam exercitationem saepe odit inventore
          perspiciatis eos.
        </p>
      </div>
      <div className="productList-list">
        {products.map((item) => (
          <Product img={item.img} link={item.link} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
