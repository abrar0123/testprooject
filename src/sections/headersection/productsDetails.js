import React from "react";

export default function productsDetails({ products }) {
  return (
    <div className="mainContainer">
      {products &&
        products.map((item) => {
          const imageUrl = item.image;

          return (
            <div className="productCard">
              <div className="imgContainer">
                <img src={imageUrl} alt="pic" />
              </div>
              <p className="p1"> {item.title}</p>
              <p className="p2"> {item.price}</p>
              <p className="p2"> {item.category}</p>
              <p className="p4"> {item.description}</p>
            </div>
          );
        })}
    </div>
  );
}
