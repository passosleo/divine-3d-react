import React from 'react'
import { Link } from "react-router-dom";

const Layout = ({ children }) => {
	return (
    <div>
      <nav>
        <Link to="/">Home</Link>
				<Link to="login">Login</Link>
				<Link to="cadastro">Cadastro</Link>
        <Link to="produto">Produto</Link>
				<Link to="checkout">Checkout</Link>
      </nav>
			{children}
    </div>
	);
};

export default Layout;