import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import { Auth, PrivateRoute } from "./Auth";

import logo from './logo.svg';
import './stylesheets/App.css';
import FormView from './components/FormView';
import QuestionView from './components/QuestionView';
import Header from './components/Header';
import QuizView from './components/QuizView';


class App extends Component {
  render() {
    return (
    <div className="App">
      <Header path />
      <Router>
        <Switch>
          <Route path="/" exact component={QuestionView} />
          <PrivateRoute exact path="/add" component={FormView} />
          <Route path="/play" component={QuizView} />
          <Route component={QuestionView} />
        </Switch>
      </Router>
    </div>
  );

  }
}

// function App() {
//   return (
//     <div className="App">
//       {/* <Switch> */}
//         <Route exact path="/*" component={FormView} />
//         {/* <ProtectedRoute exact path="/app" component={AppLayout} />
//         <Route path="*" component={() => "404 NOT FOUND"} />
//       </Switch> */}
//     </div>
//   );
// }

export default App;
