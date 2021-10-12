import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Login from './components/Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Checkout from './components/Checkout';
import { useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import './firebase';
import { useSelector, useDispatch } from 'react-redux';

function App() {

  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, user => {
      if(user) {
        // user logged in
        dispatch({
          type: "SET_USER",
          user: user
        });
    }
      else {
        // user logged out
        dispatch({
          type: "SET_USER",
          user: null
        });
      }
    })
  }, );

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
