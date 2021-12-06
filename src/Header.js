import React from "react";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import AddLocationOutlinedIcon from "@material-ui/icons/AddLocationOutlined";
import "./Header.css";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
	const [{ basket, user }, dispatch] = useStateValue();

	const handleAuthenticaton = () => {
		if (user) {
			auth.signOut();
		}
	};
	return (
		<div className="header">
			<Link to="/">
				<img
					className="header__logo"
					src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
				/>
			</Link>

			<div className="header__location" style={{ marginRight: "-10px" }}>
				<AddLocationOutlinedIcon />
			</div>
			<div className="header__option">
				<span className="header__option1">Hello</span>
				<span className="header__option2">Select Your Address</span>
			</div>

			<div className="header__search">
				<select>
					<option>All</option>
				</select>
				<input className="header__searchInput" type="text" />
				<SearchOutlinedIcon className="header__searchIcon" />
			</div>

			<div className="header__nav">
				<Link to={!user && "/login"} className="header__clearlink">
					<div onClick={handleAuthenticaton} className="header__option">
						<span className="header__optionLineOne">
							Hello {!user ? "Guest" : user.email}
						</span>
						<span className="header__optionLineTwo">
							{user ? "Sign Out" : "Sign In"}
						</span>
					</div>
				</Link>

				<Link to="/orders" className="header__clearlink">
					<div className="header__option">
						<span className="header__optionLineOne">Returns</span>
						<span className="header__optionLineTwo">& Orders</span>
					</div>
				</Link>

				<div className="header__option">
					<span className="header__optionLineOne">Your</span>
					<span className="header__optionLineTwo">Prime</span>
				</div>

				<Link to="/checkout" className="header__clearlink">
					<div className="header__optionBasket">
						<ShoppingCartOutlinedIcon />
						<span className="header__optionLineTwo header__basketCount">
							{basket?.length}
						</span>
					</div>
				</Link>
			</div>
		</div>
	);
}

export default Header;
