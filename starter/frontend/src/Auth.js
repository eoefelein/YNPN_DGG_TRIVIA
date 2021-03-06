// https://medium.com/@subalerts/creating-protected-routes-in-react-js-89e95974a822
// import React from 'react';
// import App from './App';
// import Header from './components/Header';
// import FormView from './components/FormView';
// import { useHistory } from 'react-router-dom';
// import { Auth0Provider } from "@auth0/auth0-react";
// import {
//     BrowserRouter,
//     Route,
//     Switch,
//     Redirect
//   } from 'react-router-dom';

// const Auth = {isAuthenticated: false,
//     authenticate() {
//         this.isAuthenticated = true;
//     },
//     signout() {
//         this.isAuthenticated = false;
//     },
//     getAuth() {
//         return this.isAuthenticated;
//     }
// };

// const PrivateRoute = ({ component: Component, ...rest }) => (
//     <Route
//     {...rest}
//     render={props =>
//         Auth.getAuth() ? (
//         <Component {...props} />
//         ) : (
//             <Redirect
//             to={{
//                 pathname: "/add"
//             }}
//             />
//             )
//         }
//         />
//         );

// const Router = (props) => (
// <Switch>
//     <Route exact path='/' component={Header}/>
//     <PrivateRoute path="/add" component={FormView} />
//     </Switch>)
  
// // const Auth0ProviderWithHistory = ({ children }) => {
// //     const history = useHistory();
// //     const domain = "dev-uhlraa5u.us.auth0.com";
// //     const clientId = "FFpQVVAZ0hq7NgDmPxxf6pDsi6iDuMdJ";

// // const onRedirectCallback = (appState) => {
// //     history.push(appState?.returnTo || window.location.pathname);
// // };

// return (
//     <PrivateRoute
//     redirectUri={window.location.origin}
//     >
//     <App/>
//     </PrivateRoute>,
//     document.getElementById("root")
// );

// export default { PrivateRoute };
// // export default new Auth();