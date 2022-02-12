import {useDispatch} from "react-redux";
import { Link } from "react-router-dom";
import validator from 'validator';
import {removeError, setError} from "../../actions/ui";

import useForm from "../../hooks/useForm";

const RegisterScreen = () => {
	const dispatch = useDispatch();
	const [{ name, email, password, password2 }, handleInputChange, reset] =
		useForm({
			name: "",
			email: "",
			password: "",
			password2: "",
		});


	const isFormValid = () => {
		if(name.trim().length < 3 ){
			dispatch(setError('the name length is too short'));
			return false;
		} else if(validator.isEmail(email) === false) {
			dispatch(setError('the password length is too short'));
			return false;
		}else if(password === password2){
			dispatch(setError('passwords doesnt match'));
			return false;
		} else if(password.trim().length < 4) {
			dispatch(setError('the password length is too short'));
			return false;
		}

		dispatch(removeError());
		return true;
	};

	const handleRegisterSubmit = (e) => {
		e.preventDefault();

		if(isFormValid() === false)
			return;

	}


	return (
		<form className="auth__form" onSubmit={handleRegisterSubmit}>
			<fieldset className="auth__fieldset">
				<legend className="auth__title">Register</legend>
				<div className="auth__field">
					<input
						className="auth__input"
						type="text"
						placeholder="Put your name..."
						name="name"
						autoComplete="off"
						onChange={handleInputChange}
					/>
				</div>
				<div className="auth__field">
					<input
						className="auth__input"
						type="text"
						placeholder="Put your email..."
						onChange={handleInputChange}
						name="email"
						autoComplete="off"
					/>
				</div>
				<div className="auth__field">
					<input
						className="auth__input"
						type="password"
						name="password"
						placeholder="Put your password..."
						autoComplete="off"
						onChange={handleInputChange}
					/>
				</div>
				<div className="auth__field">
					<input
						className="auth__input"
						type="password"
						name="password2"
						placeholder="Confirm your password..."
						autoComplete="off"
						onChange={handleInputChange}
					/>
				</div>
				<div className="auth__field">
					<input
						type="submit"
						value="Register"
						className="btn btn-primary btn-block"
					/>
				</div>
				<Link className="link" to="/auth/login">
					Already have an account?
				</Link>
			</fieldset>
		</form>
	);
};

export default RegisterScreen;
