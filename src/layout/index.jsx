import React from 'react'
import { Link } from "react-router-dom";
import { Divider, Header, HeaderContent, Logo, SearchInput, UserActions } from './styles';
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
						<FaShoppingCart color="#F5F5F5" size="1.3em" style={{margin: "0 10px", cursor: "pointer"}}/>
						<FaHeart color="#F5F5F5" size="1.3em" style={{margin: "0 10px", cursor: "pointer"}}/>
						<Divider />
						<img src={avatar} alt="Logo Divine 3D"/>
					</UserActions>
				</HeaderContent>
			</Header>
			{children}
		</>
	);
};

export default Layout;