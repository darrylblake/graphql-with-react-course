import React, { Component } from "react";
import AuthForm from "./AuthForm";
import mutation from "../mutations/Login";
import query from "../queries/CurrentUser";
import { graphql } from "react-apollo";

class LoginForm extends Component {
  handleSubmit({ email, password }) {
    this.props.mutate({
      variables: { email, password },
      refetchQueries: [{ query }]
    });
  }

  render() {
    console.log(this.props);
    const { mutate } = this.props;
    return (
      <div>
        <h3>Login</h3>
        <AuthForm handleSubmit={this.handleSubmit.bind(this)} />
      </div>
    );
  }
}

export default graphql(mutation)(LoginForm);
