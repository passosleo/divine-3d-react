import styled from 'styled-components'

const bg = "#950101"
const white = "#F5F5F5"

export const Header = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 60px;
	width: 100vw;
	background-color: ${bg};
	box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const HeaderContent = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	max-width: 1400px;
	width: 100%;
`;

export const Logo = styled.div`
	display: flex;
	align-items: center;
	color: ${white};

	img {
		width: 50px;
	}

	h1 {
		font-family: Raleway, sans-serif;
		font-size: 22px;
		font-weight: 600;
		margin-left: 10px;
	}
`;

export const SearchInput = styled.input`
	max-width: 400px;
	width: 100%;
	border: none;
	outline: none;
	padding: 0 10px;
	border-radius: 6px;
	height: 28px;
`;

export const UserActions = styled.div`
	display: flex;
	align-items: center;

	img {
		width: 40px;
		height: 40px;
		border-radius: 100%;
		margin-left: 10px;
		cursor: pointer;
	}
`;

export const Divider = styled.div`
	width: 1px;
	height: 30px;
	margin: 0 15px;
	border-radius: 2px;
	background-color: ${white};
`;
