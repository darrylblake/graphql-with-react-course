import React, { Component } from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

class LyricList extends Component {
  handleLike(id) {
    this.props.mutate({
      variables: {
        id
      }
    });
  }

  renderLyrics() {
    return this.props.lyrics.map(({ id, content, likes }) => {
      return (
        <li className="collection-item" key={id}>
          {content}
          <i
            className="material-icons right"
            onClick={() => this.handleLike(id)}
          >
            thumb_up
          </i>
          {likes > 0 &&
            <span className="badge" data-badge-caption="likes">{likes}</span>}
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="collection">
        {this.renderLyrics()}
      </ul>
    );
  }
}

const mutation = gql`
  mutation LikeLyric($id: ID) {
    likeLyric(id: $id) {
      id
      likes    
    }
  }
`;

export default graphql(mutation)(LyricList);
