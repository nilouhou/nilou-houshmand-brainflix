import Button from "../Button/Button";
import "./Header.scss";
import logo from "../../assets/images/logo/brainflix-logo.svg";
import avatar from "../../assets/images/Mohan-muruge.jpg";





const Header = () => {
	return (
		<>
        <section className="header">
			<div className="header__logo">
				<img src={logo} alt="logo" />
			</div>
			<div className="header__search">
               <form className="header__form">
				   <input className="header__input" type="text" name="search"  />
			   </form>
			   <div className="header__avatar">
              		<img src={avatar} alt="mohan muruge" />
               </div>
			   <Button className="header__button" text="UPLOAD" />
			</div>
			
		</section>		
		</>
	);
};

export default Header;
