import React from "react";

import "./headersection.css";
import imagePath from "../../constants/imagePath";

export default function headerSection() {
  return (
    <section className="headsectionCard">
      <div className="headerMainContainer flex spaceb">
        <div className="firstCardsStyle">
          {/* <h1>JDK Store Sales </h1> */}
          <h3 className="salesheader">Summer Collection </h3>
          <h1 className="discuntheader">
            Disocunt <span style={{ color: "red" }}> 70% </span> OFF{" "}
          </h1>

          <p className="ptext">
            Welcme to our Sephora Sales Store, Please visit our store and pick
            your favourite things, add to cart , add them into favourite section
            and apply vouchers and place order at any time and enjoy things at
            your home
          </p>
          <div className="btnstyle flex">
            <button className="button1">Read More</button>
            <button className="button2">Shop Now</button>
          </div>
        </div>
        <div className="imageContainer">
          <img src={imagePath.headphone} alt="" />
        </div>
      </div>
    </section>
  );
}
