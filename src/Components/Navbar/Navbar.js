import React from "react";
import { connect } from "react-redux";
import {logout} from '../../Redux/Reducers/userReducer'
import Football from "../../football.png";
import "./Navbar.css";


function Navbar(props) {
  const { user } = props;

  return (
    <header id="navbar-master">
      <section id="nav-title">
        <img id="nfl-logo" src={Football} alt="nfl-logo" />
        <h3>NFL Predictor</h3>
      </section>
      {user.loggedIn ? (
        <section id="info-and-logout">
          <div id='user-info'>
            <img src={user.profilePic} alt="profilePic" />
            {user.username}
          </div>
          <a href='#/login' onClick={props.logout}>Logout</a>
        </section>
      ) : null}
    </header>
  );
}

function mapStateToProps(state) {
  return state.user;
}

export default connect(mapStateToProps, {logout})(Navbar);
