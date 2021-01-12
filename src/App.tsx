import React from 'react';
import './styles/App.css';
import { 
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

// My pages
import Layout from './containers/Layout'
import Home from './containers/Home'
import Profile from './containers/Profile'
import Projects from './containers/Projects'

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route
            exact
            path='/'
            component={Home}
          />
          <Route
            path='/profile'
            component={Profile}
          />

          <Route
            exact
            path='/projects'
            component={Projects}
          />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
