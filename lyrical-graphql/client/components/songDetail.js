import React, { Component } from "react";
import { Link } from "react-router";
import { graphql } from "react-apollo";
import fetchSong from "../queries/fetchSong";

class SongDetail extends Component {
  renderSong() {
    console.log(this.props.data);
    const { song } = this.props.data;
    return (
      <div>
        <Link to="/">Back</Link>
        <h3>{song.title}</h3>
      </div>
    );
  }
  render() {
    const { loading } = this.props.data;
    if (!loading) return this.renderSong();
    return <div>Loading</div>;
  }
}

export default graphql(fetchSong, {
  options: props => {
    return { variables: { id: props.params.id } };
  }
})(SongDetail);
