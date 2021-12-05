import React from "react";
import "./Form.scss";
import avatar from "../../assets/images/Mohan-muruge.jpg";

const Form = () => {
	return (
		<div className="form-wrapper">
			<div className="form-wrapper__avatar">
				<img src={avatar} alt="mohan muruge" />
			</div>
			<form className="form">
				<label className="form__label" htmlFor="commentTextArea">
					Join the conversation
					<textarea
						className="form__textarea"
						name="commentTextArea"
						id="commentTextArea"
						placeholder="Add a new comment"
						aria-placeholder="Add a new comment"
					></textarea>
				</label>
				<div className="form__button-wrapper">
					<button className="primary-button" type="submit" disabled>
						Comment
					</button>
				</div>
			</form>
		</div>
	);
};

export default Form;
