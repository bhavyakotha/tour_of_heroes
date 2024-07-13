import Navbar from './Navbar';
import Dashboard from './Dashboard';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Heroes from './Heroes';
import Heroview from './Heroview';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="bg">
          <Navbar />
            <div className="content">
              <Switch>
                <Route exact path = "/">
                  <Dashboard />
                </Route>
                <Route path = "/allheroes">
                  <Heroes />
                </Route>
                <Route path = "/heroes/:id">
                  <Heroview />
                </Route>
              </Switch>
            </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
