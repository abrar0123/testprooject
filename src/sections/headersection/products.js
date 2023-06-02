import React, { useEffect, useState } from "react";
import "./headersection.css";
import ProductsDetails from "./productsDetails";
import Postheader from "../../components/Layout/postheader/postheader";

export default function Headersection() {
  const [productdata, setproductdata] = useState([]);

  useEffect(() => {
    const productapi = async () => {
      const response = await fetch("https://fakestoreapi.com/products/");
      const data = await response.json();
      console.log("data_", data);
      setproductdata(data);
    };
    productapi();
  }, []);

  return (
    <>
      <Postheader />
      <div className="hsection">
        <div style={{ marginBottom: "30px" }}>
          <p className="ptext">My Products</p>
        </div>
        <ProductsDetails products={productdata} />
      </div>
    </>
  );
}
