import "./Button.scss";

const Button = ({ text, cname }) => {
	return (
		<button className={cname} type="submit">
			{text}
		</button>
	);
};

export default Button;
