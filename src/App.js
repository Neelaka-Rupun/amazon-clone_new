import './App.css';
import Header from './Components/header';
import Home from './Components/home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Checkout from './Components/checkout';
import Login from './Components/login';
function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/checkout'>
            <Checkout />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
