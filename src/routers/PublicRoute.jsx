import {Redirect, Route} from "react-router-dom"

const PublicRoute = ({isLoggedIn, children, ...rest}) => {
	console.log(isLoggedIn);
	return (
		<Route
			{...rest}
			render={() => isLoggedIn === true ? (<Redirect to="/"/>) : children}
		/>
	);
}

export default PublicRoute
