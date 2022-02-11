import {Redirect, Route, Switch, useRouteMatch} from 'react-router-dom';

import RegisterScreen from '../components/auth/RegisterScreen';
import LoginScreen from '../components/auth/LoginScreen';

const AuthRouter = () => {
	const {path} = useRouteMatch();
	return (
		<div className="auth__main">
			<div className="auth__box-container">
				<Switch>
					<Route path={`${path}/register`}>
						<RegisterScreen/>
					</Route>
					<Route path={`${path}/login`}>
						<LoginScreen/>
					</Route>
					<Redirect to="/auth/login"/>
				</Switch>
			</div>
		</div>
	)
}

export default AuthRouter
