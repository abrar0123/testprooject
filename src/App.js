import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Layout/header/header";
import Products from "./sections/headersection/products";
import Headsection from "./sections/sectionHeader/headerSection";
import PreFooter from "./components/Layout/prefooter/prefooter";
import PostHeader from "./components/Layout/postheader/postheader";
import Login from "./sections/auth/Login";
// import SeparateProduct from "./sections/headersection/separateProduct";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" Component={Headsection} />
        <Route path="products" Component={Products} />
        <Route path="Login" Component={Login} />

        {/* <Route path="/Products/:pid" Component={SeparateProduct} /> */}
      </Routes>

      {/* <Headsection /> */}
      <PreFooter />
    </>
  );
}

export default App;
