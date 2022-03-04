import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { PrivateRoute } from './PrivateRoute.jsx';
import { isLoggedIn } from './auth.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PeriodTracker from './components/pages/PeriodTracker';
import DietPlanner from './components/pages/DietPlanner';
import ExerciseTracker from './components/pages/exercisetracker/ExerciseTracker';
import SignUp from './components/pages/SignUp';
import SelfDiagnosis from './components/pages/SelfDiagnosis';
import PrivacyPolicy from './components/pages/PrivacyPolicy';
import GynoHelp from './components/pages/GynoHelp';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/SelfDiagnosis' component={SelfDiagnosis} />
          <Route path='/PeriodTracker' component={PeriodTracker} />
          <Route path='/DietPlanner' component={DietPlanner} />
          <Route path='/ExerciseTracker' component={ExerciseTracker} />
          <PrivateRoute
            exact
            isLoggedin={isLoggedIn()}
            path='/'
            component={Home}
          />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/PrivacyPolicy' component={PrivacyPolicy} />
          <Route path='/GynoHelp' component={GynoHelp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
