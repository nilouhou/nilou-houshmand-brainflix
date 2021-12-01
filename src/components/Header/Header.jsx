import Button from "../Button/Button"
import logo from "../../assets/images/logo/brainflix-logo.svg";

const Header = () => {
	return (
		<>
        <section className="header">
			<div className="header__logo">
				<img src={logo} alt="logo" />
			</div>
			<div className="header__search">
               <form action="">
				   <input type="text" name="search"  />
				   <img src="" alt="" />
			   </form>
			</div>
			<Button text="UPLOAD" icon="" />
		</section>		
		</>
	);
};

export default Header;
