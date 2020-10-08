import React from "react";

import "./sign-in.styles.scss";
import FormInput from "../Input/input.component";

class SignInForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({ email: "", password: "" });
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div className="signInForm">
          <h2>I already have an account</h2>
          <h4>Sign in with your email and password</h4>
          <form onSubmit={this.handleSubmit}>
            <FormInput
            type="email"
            className="email-box"
            required
            value={this.state.email}
            name="email"
            label="email"
            handleChange={this.handleChange}
            />
            <FormInput
            type="password"
            className="password-input"
            required
            value={this.state.password}
            name="password"
            label="password"
            handleChange={this.handleChange}
            />

            <input type="submit" value="sign in" />
        </form>
      </div>
    );
  }
}

export default SignInForm;