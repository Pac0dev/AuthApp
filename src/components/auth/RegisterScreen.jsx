import { Link } from "react-router-dom";
const RegisterScreen = () => {
	return (
		<form className="auth__form">
			<fieldset className="auth__fieldset">
				<legend className="auth__title">Register</legend>
				<div className="auth__field">
					<input
						className="auth__input"
						type="text"
						placeholder="Put your name..."
						name="name"
						autoComplete="off"
					/>
				</div>
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
						autoComplete="off"
					/>
				</div>
				<div className="auth__field">
					<input
						className="auth__input"
						type="password"
						name="password2"
						placeholder="Confirm your password..."
						autoComplete="off"
					/>
				</div>
				<div className="auth__field">
					<input type="submit" value="Register" className="btn btn-primary btn-block" />
				</div>
				<Link className="link" to="/auth/login">
					Already have an account?
				</Link>
			</fieldset>
		</form>
	);
}

export default RegisterScreen;
