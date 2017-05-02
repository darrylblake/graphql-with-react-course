import React, { Component } from "react";
import { Link } from "react-router";
import { graphql } from "react-apollo";
import fetchSong from "../queries/fetchSong";
import LyricCreate from "./LyricCreate";

class SongDetail extends Component {
  render() {
    const { song, loading } = this.props.data;
    const { id } = this.props.params;

    if (loading) return <div>Loading...</div>;
    return (
      <div>
        <Link to="/">Back</Link>
        <h3>{song.title}</h3>
        <LyricCreate songId={id} />
      </div>
    );
  }
}

export default graphql(fetchSong, {
  options: props => {
    return { variables: { id: props.params.id } };
  }
})(SongDetail);
