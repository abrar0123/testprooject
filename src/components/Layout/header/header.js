import React from "react";
import "./header.css";
import imagePath from "../../../constants/imagePath";
import { Link } from "react-router-dom";

export default function header() {
  return (
    <header className="header flex spacea">
      <div className="imgContainer">
        <img src={imagePath.logo} />
      </div>
      {/* <div>
        <p className="p"> JDKStore </p>
      </div> */}
      <div className="navBar">
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/Products"}>Products</Link>
          </li>{" "}
          <li>
            <a href="#">Logout</a>
          </li>
          <li>
            <Link to={"/Login"}>Login</Link>
          </li>
        </ul>
      </div> 
    </header>
  );
}
