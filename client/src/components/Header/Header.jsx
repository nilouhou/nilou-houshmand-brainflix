import { Link } from "react-router-dom";
import "./Header.scss";
import logo from "../../assets/images/logo/brainflix-logo.svg";
import avatar from "../../assets/images/Mohan-muruge.jpg";
import searchIcon from "../../assets/images/icons/search.svg";

const Header = () => {
	return (
		<>
			<section className="header">
				<div className="header__logo">
					<Link to="/">
						<img src={logo} alt="logo" />
					</Link>
				</div>
				<div className="header__search">
					<div className="header__search-box">
						<img src={searchIcon} alt="search" />
						<input
							className="header__input"
							type="text"
							name="search"
							placeholder="Search"
						/>
					</div>
					<div className="header__avatar">
						<img src={avatar} alt="mohan muruge" />
					</div>
					<Link to="/upload" className="header__button primary-button">
						UPLOAD
					</Link>
				</div>
			</section>
		</>
	);
};

export default Header;
