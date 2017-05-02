import React, { Component } from "react";
import { graphql } from "react-apollo";
import addLyric from "../queries/addLyric";

class LyricCreate extends Component {
  constructor(props) {
    super(props);

    this.state = { content: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      content: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.mutate({
      variables: {
        songId: this.props.songId,
        content: this.state.content
      }
    });
    this.setState({ content: "" });
  }

  render() {
    console.log(this.props);
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Add a Lyric</label>
        <input value={this.state.content} onChange={this.handleChange} />
      </form>
    );
  }
}

export default graphql(addLyric)(LyricCreate);
