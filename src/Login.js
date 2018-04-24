import React, { Component } from "react";
import UserManager from "./globals/managers/UserManager";

class Login extends Component {
  componentWillMount() {
    UserManager.login("a","b");
  }

  render() {
    return (
      <div class="login">
        <div class="container">
          <label for="uname"><b>Username</b></label>
          <input type="text" placeholder="Enter Username" name="uname" required />

          <label for="psw"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="psw" required />

          <button class="login-button" type="submit">Login</button>

        </div>

        <div class="container" hidden>
          <label for="uname"><b>Username</b></label>
          <input type="text" placeholder="Enter Username" name="uname" required />

          <label for="psw"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="psw" required />

          <button class="login-button" type="submit">Login</button>

        </div>
      </div>
    );
  }
}

export default Login;