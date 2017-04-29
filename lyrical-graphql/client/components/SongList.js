import React, { Component } from "react";
import { graphql } from "react-apollo";
import { Link } from "react-router";
import query from "../queries/fetchSongs";
import gql from "graphql-tag";

class SongList extends Component {
  handleDelete(id) {
    const deleted = this.props
      .mutate({
        variables: {
          id
        }
      })
      .then(() => this.props.data.refetch());
  }

  renderSongs() {
    const { songs = [] } = this.props.data;

    return songs.map(({ id, title }) => (
      <li key={id} className="collection-item">
        {title}
        <i
          onClick={() => this.handleDelete.bind(this)(id)}
          className="material-icons right"
        >
          delete
        </i>
      </li>
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

const mutation = gql`
  mutation DeleteSong($id: ID) {
    deleteSong(id: $id) {
      id
    }
  }
`;

export default graphql(mutation)(graphql(query)(SongList));
