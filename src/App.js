import logo from './logo.svg';
import './App.css';
import Home from './pages/Home'

function App() {
  return (
    <Router>
      <Switch>
        <PrivateRoute exact path="/" children={<Home />} />
      </Switch>
    </Router>
  );
}

export default App;
