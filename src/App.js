import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Login from './components/Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Checkout from './components/Checkout';

function App() {

  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/checkout'>
            <Header />
            <Checkout />
          </Route>
          <Route path='/'>
            <Header />
            <Main />
          </Route>
        </Switch>
      </div>
    </Router >
  );
}

export default App;
