import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Divider,
  Header,
  HeaderContent,
  Logo,
  SearchInput,
  UserActions,
} from "./styles";
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import logo from "../assets/images/logo.png";
import avatar from "../assets/images/avatar.png";

const Layout = ({ children }) => {
  return (
    <>
      <Header>
        <HeaderContent>
          <Link to="/">
            <Logo src={logo}>
              <img src={logo} alt="Logo Divine 3D" />
              <h1>Divine 3D</h1>
            </Logo>
          </Link>
          <SearchInput placeholder="Procurar..." />
          <UserActions>
            <Link to="checkout">
              <FaShoppingCart
                color="#F5F5F5"
                size="1.3em"
                style={{ margin: "0 10px", cursor: "pointer" }}
              />
            </Link>
            <FaHeart
              color="#F5F5F5"
              size="1.3em"
              style={{ margin: "0 10px", cursor: "pointer" }}
            />
            <Divider />
            <Link to="/login">
              <img src={avatar} alt="Logo Divine 3D" />
            </Link>
          </UserActions>
        </HeaderContent>
      </Header>
      <Container>{children}</Container>
    </>
  );
};

export default Layout;
