import React, { Component } from "react";
import { graphql } from "react-apollo";
import { Link } from "react-router";
import query from "../queries/fetchSongs";

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
      <div>
        <h3>Songs List</h3>
        <ul className="collection">
          {this.renderSongs()}
        </ul>
        <Link className="btn-floating right btn-large red" to="song/new">
          <i className="material-icons">add</i>
        </Link>
      </div>
    );
  }
}

export default graphql(query)(SongList);
