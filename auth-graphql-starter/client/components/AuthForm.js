import React, { Component } from "react";

class AuthForm extends Component {
  constructor(props) {
    super(props);

    this.state = { email: "", password: "" };
  }

  handleSubmit(event) {
    event.preventDefault();

    const { email, password } = this.state;
    this.props.handleSubmit({ email, password });
  }

  render() {
    const { email, password } = this.state;
    return (
      <div className="row">
        <form className="col s6" onSubmit={this.handleSubmit.bind(this)}>
          <div className="input-field">
            <input
              placeholder="Email"
              value={this.state.email}
              onChange={event => this.setState({ email: event.target.value })}
            />
          </div>
          <div className="input-field">
            <input
              placeholder="Password"
              type="password"
              value={this.state.password}
              onChange={event =>
                this.setState({ password: event.target.value })}
            />
          </div>
          <button className="btn">Submit</button>
        </form>
      </div>
    );
  }
}

export default AuthForm;
