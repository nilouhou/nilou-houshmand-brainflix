import Button from "../Button/Button";
import "./Header.scss";
import logo from "../../assets/images/logo/brainflix-logo.svg";
import avatar from "../../assets/images/Mohan-muruge.jpg";
import searchIcon from "../../assets/images/icons/search.svg";

const Header = () => {
	return (
		<>
			<section className="header">
				<div className="header__logo">
					<img src={logo} alt="logo" />
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
					<Button cname="header__button primary-button" text="UPLOAD" />
				</div>
			</section>
		</>
	);
};

export default Header;
