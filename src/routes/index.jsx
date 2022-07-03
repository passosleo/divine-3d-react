import React from "react";
import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";
import Layout from "../layout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Product from "../pages/Product";
import Checkout from "../pages/Checkout";

const Routes = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="cadastro" element={<Register />} />
          <Route path="produto" element={<Product />} />
          <Route path="checkout" element={<Checkout />} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default Routes;
