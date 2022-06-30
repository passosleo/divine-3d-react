import React from 'react'
import { Link } from "react-router-dom";
import { Header } from './styles';

const Layout = ({ children }) => {
	return (
    <div>
      <Header>
        <Link to="/">Home</Link>
				<Link to="login">Login</Link>
				<Link to="cadastro">Cadastro</Link>
        <Link to="produto">Produto</Link>
				<Link to="checkout">Checkout</Link>
      </Header>
			{children}
    </div>
	);
};

export default Layout;