
import {useEffect, useState} from "react"
import firebase from 'firebase/app';
import {Route, BrowserRouter as Router, Switch, Redirect} from "react-router-dom"

import JournalScreen from "../components/journal/JournalScreen"
import AuthRouter from "./AuthRouter"
import {useDispatch} from "react-redux";
import {login} from "../actions/auth";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

const AppRouter = () => {

	const dispatch = useDispatch();
	const [isLoading, setIsLoading] = useState(true);
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	useEffect(() => {
		//observable
		firebase.auth().onAuthStateChanged((user) => {
			if(user?.uid) {
				dispatch(login(user.uid, user.displayName));
				setIsLoggedIn(true);
			} else {
				setIsLoggedIn(false);
			}
			setIsLoading(false);
		});
	}, [dispatch, setIsLoading]);
	
	if(isLoading === true ) {
		return <h1>Espere...</h1>
	}

	return ( 
		<Router>
			<Switch>
				<Route path="/auth">
					<PublicRoute isLoggedIn={isLoggedIn}>
						<AuthRouter/>
					</PublicRoute>
				</Route>
				<Route exact path="/">
					<PrivateRoute isLoggedIn={isLoggedIn}>
						<JournalScreen/>
					</PrivateRoute>
				</Route>
				<Redirect to="/auth"/>
			</Switch>
		</Router>
	)
}

export default AppRouter
