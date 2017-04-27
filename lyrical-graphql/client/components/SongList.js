import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

class SongList extends Component {
  renderSongs() {
    const { songs = [] } = this.props.data;

    return songs.map(song => (
      <li key={song.id} className="collection-item">{song.title}</li>
    ));
  }

  render() {
    const { loading } = this.props.data;
    if (loading) return <div>Loading...</div>;
    return (
      <ul className="collection">
        {this.renderSongs()}
      </ul>
    );
  }
}

const query = gql`
  {
    songs {
      id
      title
    }
  }
`;

export default graphql(query)(SongList);
