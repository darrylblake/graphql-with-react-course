import React, { Component } from "react";
import { graphql } from "react-apollo";
import { Link, hashHistory } from "react-router";
import query from "../queries/fetchSongs";
import gql from "graphql-tag";

class SongCreate extends Component {
  constructor(props) {
    super(props);

    this.state = { title: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props
      .mutate({
        variables: {
          title: this.state.title
        },
        refetchQueries: [{ query }]
      })
      .then(() => {
        hashHistory.push("/");
      });
  }

  handleChange(event) {
    this.setState({ title: event.target.value });
  }

  render() {
    return (
      <div>
        <Link to="/">Back</Link>
        <h3>Create a New Song</h3>
        <form onSubmit={this.handleSubmit}>
          <label>
            Song Title:
            <input onChange={this.handleChange} value={this.state.title} />
          </label>
        </form>
      </div>
    );
  }
}

const mutation = gql`
  mutation AddSong($title: String) {
    addSong(title: $title) {
      title
    }
  }
`;

export default graphql(mutation)(SongCreate);
