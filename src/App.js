import React, {Suspense, lazy} from 'react';
import './App.css'; 

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import {connect} from 'react-redux';
const Landing = lazy(() => import('../src/Pages/Landing'));
const Details = lazy(() => import('../src/Pages/Details'));

function App() {
  return (
    <div className="App">
    <div className="appWrapper">
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/" component={Landing}></Route>
            <Route exact path="/user/:username" component={Details}></Route>
          </Switch>
        </Suspense>
      </Router>
      </div>
    </div>
  );
}

const mapStateToProps = function(state) {
  return state
}
const dispatchStateToProps = function(dispatch) {
  return {
    dispatch
  }
}

export default connect(mapStateToProps, dispatchStateToProps)(App);
