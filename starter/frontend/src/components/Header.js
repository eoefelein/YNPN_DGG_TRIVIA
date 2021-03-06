import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import '../stylesheets/Header.css';
// import { Auth0Provider } from "@auth0/auth0-react";
// <h2 onClick={() => { auth => {auth.login(() => {props.history.push("/add");})}}}>Login</h2>

import auth from "../Auth";

// export const Header = (props) => {
//   return (
//     <div>
//       <h1>Add Question</h1>
//       <button
//         onClick={() => {
//           auth.login(() => {
//             props.history.push("/add");
//           });
//         }}
//       >
//         Login
//       </button>
//     </div>
//   );
// };

class Header extends Component {

  constructor(props){
    super(props);
    this.login=this.login.bind(this);
    this.logout=this.logout.bind(this);
  }login(){
    auth.authenticate();
  }logout(){
    auth.signout();
  }

  navTo(uri){
    window.location.href = window.location.origin + uri;
  }

  render() {
    return (
      <div className="App-header">
        <h1 onClick={() => {this.navTo('')}}>YNPN Do-Gooder Games</h1>
        <h2 onClick={() => {this.navTo('')}}>Trivia</h2>
        <button onClick={this.login}>Login</button><br/>
        {/* <h2 onClick={() => {this.navTo('/add')}}>Login</h2> */}
        <h2 onClick={() => {this.navTo('/play')}}>Let's Play</h2>
      </div>
    );
  }
}

export default Header;
