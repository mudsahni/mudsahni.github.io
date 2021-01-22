import * as React from 'react';

import './App.css';
import { Home } from './page/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'
import { Post } from './page/Post';
import { Footer } from './components/Footer';
import { Nav } from './components/Nav';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/:id" component={Post} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
