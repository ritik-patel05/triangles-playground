import './App.css';
import { Route, Switch } from 'react-router-dom';
import Hypotenuse from './pages/Hypotenuse';
import CheckTriangle from './pages/CheckTriangle';
import Header from './components/Header';
import AreaOfTriangle from './pages/AreaOfTriangle';
import Quiz from './pages/Quiz';

function App() {
	return (
		<>
			<Header />

			<Switch>
				<Route exact path='/'>
					<Quiz />
				</Route>
				<Route path='/istriangle'>
					<CheckTriangle />
				</Route>
				<Route path='/hypotenuse'>
					<Hypotenuse />
				</Route>
				<Route path='/area'>
					<AreaOfTriangle />
				</Route>
			</Switch>
		</>
	);
}

export default App;
