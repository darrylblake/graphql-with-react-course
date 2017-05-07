import React, { Component } from "react";
import AuthForm from "./AuthForm";
import mutation from "../mutations/Signup";
import query from "../queries/CurrentUser";
import { graphql } from "react-apollo";

class SignupForm extends Component {
  constructor(props) {
    super(props);

    this.state = { errors: [] };
  }

  handleSubmit({ email, password }) {
    this.setState({ errors: [] });
    this.props
      .mutate({
        variables: { email, password },
        refetchQueries: [{ query }]
      })
      .catch(res => {
        const errors = res.graphQLErrors.map(error => error.message);
        this.setState({ errors });
      });
  }

  render() {
    const { mutate } = this.props;
    return (
      <div>
        <h3>Sign Up</h3>
        <AuthForm
          handleSubmit={this.handleSubmit.bind(this)}
          errors={this.state.errors}
        />
      </div>
    );
  }
}

export default graphql(mutation)(SignupForm);
