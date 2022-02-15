import { useDispatch, useSelector } from "react-redux";
import {Link} from "react-router-dom";
import validator from 'validator';

import {startGoogleLogin, startLoginWithEmailAndPassword} from "../../actions/auth";
import useForm from "../../hooks/useForm";

const LoginScreen = () => {

	const dispatch = useDispatch();
	const {loading} = useSelector(state => state.ui);

	const [{email, password}, handleInputChange, resetForm ] = useForm({
		email: '',
		password: '',
	});

	const isValidForm = () => {
		if(validator.isEmail(email) === false) {
			return false;
		} 
		return true;
	}
	const handleLogin = (e) => {
		e.preventDefault();
		if(isValidForm() === false) {
			return;
		}
		dispatch(startLoginWithEmailAndPassword(email, password));
	};

	const handleGoogleLoginClick = () => {
		dispatch(startGoogleLogin())
	}


	return (
		<form className="auth__form" onSubmit={handleLogin}>
			<fieldset className="auth__fieldset">
				<legend className="auth__title">Login</legend>
				<div className="auth__field">
					<input
						className="auth__input"
						type="text"
						placeholder="Put your email..."
						name="email"
						autoComplete="off"
						value={email}
						onChange={handleInputChange}
					/>
				</div>
				<div className="auth__field">
					<input
						className="auth__input"
						type="password"
						name="password"
						placeholder="Put your password..."
						value={password}
						onChange={handleInputChange}
					/>
				</div>
				<div className="auth__field">
					<input disabled={loading} type="submit" value="Login" className="btn btn-primary btn-block" />
				</div>
				<div className="auth__social-network">
					<span className="auth__span">Login With Social Network</span>
					<div className="google-btn" onClick={handleGoogleLoginClick}>
						<div className="google-icon-wrapper">
							<img
								className="google-icon"
								src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
								alt="google button"
							/>
						</div>
						<p className="btn-text">
							<b>Sign in with google</b>
						</p>
					</div>
				</div>
				<Link className="link" to="/auth/register">
					Create new Account
				</Link>
			</fieldset>
		</form>
	);
};

export default LoginScreen;
