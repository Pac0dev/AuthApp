import {Link} from "react-router-dom";

const LoginScreen = () => {
	return (
		<form className="auth__form">
			<fieldset className="auth__fieldset">
				<legend className="auth__title">Login</legend>
				<div className="auth__field">
					<input
						className="auth__input"
						type="text"
						placeholder="Put your email..."
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
					/>
				</div>
				<div className="auth__field">
					<input type="submit" value="Login" className="btn btn-primary btn-block" />
				</div>
				<div className="auth__social-network">
					<span className="auth__span">Login With Social Network</span>
					<div className="google-btn">
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
