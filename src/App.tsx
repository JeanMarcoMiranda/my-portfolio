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
import News from './containers/News'

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route
            exact
            path='/my-portfolio/'
            component={Home}
          />
          <Route
            path='/my-portfolio/profile'
            component={Profile}
          />

          <Route
            exact
            path='/my-portfolio/projects'
            component={Projects}
          />

          <Route
            exact
            path='/my-portfolio/news'
            component={News}
          />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
