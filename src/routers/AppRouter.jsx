
import {Route, BrowserRouter as Router, Switch, Redirect} from "react-router-dom"
import JournalScreen from "../components/journal/JournalScreen"
import AuthRouter from "./AuthRouter"

const AppRouter = () => {
	return ( 
		<Router>
			<Switch>
				<Route path="/auth">
					<AuthRouter/>
				</Route>
				<Route exact path="/">
					<JournalScreen/>
				</Route>
				<Redirect to="/auth"/>
			</Switch>
		</Router>
	)
}

export default AppRouter
