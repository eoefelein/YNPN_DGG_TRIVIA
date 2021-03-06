import React from 'react'; // allows us to write React Components
import ReactDOM from 'react-dom'; // ReactDOM script allows us to place our components and work with them in the context of the DOM
import './stylesheets/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// BrowserRouter gives access to the API and keeps the UI in sync with the URL
import {
    BrowserRouter,
    Route,
    Switch
  } from 'react-router-dom';
// import Auth0ProviderWithHistory from "./auth0-provider-with-history";
import { FormView } from './components/FormView';

// function App() {
//     return (
//       <div className="App">
//         {/* <Switch> */}
//           <Route exact path="/*" component={FormView} />
//           {/* <ProtectedRoute exact path="/app" component={AppLayout} />
//           <Route path="*" component={() => "404 NOT FOUND"} />
//         </Switch> */}
//       </div>
//     );
//   }

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// class index extends Component {
// render() {
//         return (
//         <Router>
//             <Auth0ProviderWithHistory>
//             <FormView />
//             </Auth0ProviderWithHistory>
//         </Router>,
//         document.getElementById("App")
//         );
//     }
// }


//  "start": "HOST='127.0.0.1' PORT='5000' react-scripts start",
